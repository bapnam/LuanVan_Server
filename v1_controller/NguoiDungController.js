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
      newND.Quyen = req.body.Quyen.toUpperCase();

      // Save DB
      const ND = await newND.save();
      res.status(200).json(ND);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Get one or dang nhap
  getOne: async (req, res) => {
    try {
      const nd = await nguoidungModel.findOne({ Email: req.body.Email });

      const data = {
        stateLogin: "",
        id: "id",
        HoTen: "",
        NgaySinh: "",
        SDT: "",
        DiaChi: [
          {
            TinhTP: "",
            QuanHuyen: "",
            XaPhuong: "",
            ChiTiet: "",
          },
        ],
        Email: "ykgk",
        YeuThich: [""],
        LichSu: [
          {
            Tour: "",
            TrangThai: "x",
          },
        ],
        Quyen: "",
      };

      if (!nd) {
        data.stateLogin = "NoUser";
        return res.status(200).json(data); //Khong tim thay nguoi dung!!!
      } else {
        const pwd = await bcrypt.compare(req.body.MatKhau, nd.MatKhau);
        if (!pwd) {
          data.stateLogin = "NoPassword";
          return res.status(200).json(data); //Sai mat khau!!!
        }
        if (nd && pwd) {
          data.stateLogin = "Yes";
          data.id = nd._id;
          data.HoTen = nd.HoTen;
          data.NgaySinh = nd.NgaySinh;
          data.SDT = nd.SDT;
          data.DiaChi = nd.DiaChi;
          data.Email = nd.Email;
          data.YeuThich = nd.YeuThich;
          data.LichSu = nd.LichSu;
          data.Quyen = nd.Quyen;

          return res.status(200).json(data); // Cho phep dang nhap
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // update
  updateNguoiDung: async (req, res) => {
    try {
      const nd = await nguoidungModel.findById(req.params.id);

      if (req.body.MatKhau != "") {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.MatKhau, salt);
        await nd.updateOne({ $set: { MatKhau: hashed } });
      } else {
        await nd.updateOne(req.body);
      }

      res.status(200).json("updated");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = NguoiDungController;
