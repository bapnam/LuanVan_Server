const nhanvienModel = require("../v1_model/NhanVienModel");
const bcrypt = require("bcrypt");

const NhanVienController = {
  // ADD
  addNhanVien: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.MatKhau, salt);

      // Create NV
      const newNV = await new nhanvienModel(req.body);
      newNV.MatKhau = hashed;
      newNV.GioiTinh = req.body.GioiTinh.toUpperCase();
      newNV.Quyen = req.body.Quyen.toUpperCase();

      // Save DB
      const NV = await newNV.save();
      res.status(200).json(NV);
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
};

module.exports = NhanVienController;
