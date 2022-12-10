const nhanvienModel = require("../v1_model/NhanVienModel");
const bcrypt = require("bcrypt");

const NhanVienController = {
  // ADD
  addNhanVien: async (req, res) => {
    try {
      // const salt = await bcrypt.genSalt(10);
      if (req.body.MatKhau != "") {
        const newNV = await new nhanvienModel(req.body);
        console.log("HHHHHH", req.body);

        // const hashed = await bcrypt.hash(req.body.MatKhau, salt);
        // Create NV
        // newNV.MatKhau = hashed;
        // newNV.GioiTinh = req.body.GioiTinh.toUpperCase();
        // newNV.Quyen = req.body.Quyen.toUpperCase();

        // Save DB
        // const NV = await newNV.save();
        return res.status(200).json(newNV);
      }

      res.status(200).json("add Sai");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // delete
  deleteNhanVien: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Dang nhap
  dangNhap: async (req, res) => {
    try {
      const nv = await nhanvienModel.findOne({ Email: req.body.Email });

      const data = {
        stateLogin: "",
        id: "id",
        HoTen: "",
        Quyen: "",
      };

      if (!nv) {
        data.stateLogin = "NoUser";
        return res.status(200).json(data); //Khong tim thay nguoi dung!!!
      } else {
        const pwd = await bcrypt.compare(req.body.MatKhau, nv.MatKhau);
        if (!pwd) {
          data.stateLogin = "NoPassword";
          return res.status(200).json(data); //Sai mat khau!!!
        }
        if (nv && pwd) {
          data.stateLogin = "Yes";
          data.id = nv._id;
          data.HoTen = nv.HoTen;
          data.Quyen = nv.Quyen;

          return res.status(200).json(data); // Cho phep dang nhap
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // get all
  getall: async (req, res) => {
    try {
      const nv = await nhanvienModel.find();

      res.status(200).json(nv);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = NhanVienController;
