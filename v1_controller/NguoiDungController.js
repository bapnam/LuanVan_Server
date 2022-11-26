const nguoidungModel = require("../v1_model/NguoiDungModel");
const bcrypt = require("bcrypt");

const NguoiDungController = {
  // ADD or register
  addNguoiDung: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.MatKhau, salt);

      // Create NV
      const newND = await new nguoidungModel(req.body);
      newND.MatKhau = hashed;
      newND.GioiTinh = req.body.GioiTinh.toUpperCase();

      // Save DB
      const ND = await newND.save();
      res.status(200).json(ND);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Get one
  getOne: async (req, res) => {
    try {
      const nd = await nguoidungModel.findOne({ SDT: req.body.SDT });
      const pwd = await bcrypt.compare(req.body.MatKhau, nd.MatKhau);
      const data = {
        stateLogin: "",
        id: "id",
        HoTen: "HoTen",
      };

      if (!nd) {
        data.stateLogin = "NoUser";
        return res.status(200).json(data); //Khong tim thay nguoi dung!!!
      }
      if (!pwd) {
        data.stateLogin = "NoPassword";
        return res.status(200).json(data); //Sai mat khau!!!
      }
      if (nd && pwd) {
        data.stateLogin = "Yes";
        data.id = nd._id;
        data.HoTen = nd.HoTen;
        return res.status(200).json(data); // Cho phep dang nhap
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // update
  updateNguoiDung: async (req, res) => {
    try {
      const status = req.body.status;
      const nd = await nguoidungModel.findById(req.body.id);
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.MatKhau, salt);

      switch (status) {
        // update Mat Khau, doi mat khau
        case "MatKhau": {
          await nd.updateOne({ $set: { MatKhau: hashed } });
          res.status(200).json("Update MatKhau done.");
          break;
        }
        // update nguoi huong dan
        // case "guider": {
        //   await nd.updateOne({ $set: { guider: req.body.guider } });
        //   res.status(200).json("Update guider done.");
        //   break;
        // }

        default: {
          // mac dinh khi k co status
          res.status(200).json("Update khong hop le!");
          break;
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = NguoiDungController;
