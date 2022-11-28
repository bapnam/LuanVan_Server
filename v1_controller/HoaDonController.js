const hoadonModel = require("../v1_model/HoaDonModel");

const HoaDonController = {
  // ADD
  addHoaDon: async (req, res) => {
    try {
      const dsHoaDon = await hoadonModel.find();
      // Lay ngay (DD/MM/YYYY), tach /, dao nguoc, gop lai
      const d = new Date()
        .toLocaleDateString("en-GB")
        .split("/")
        .reverse()
        .join("");
      const maHoaDon = d + "HD" + (dsHoaDon.length + 1);

      const newHD = new hoadonModel(req.body);
      newHD.MaHoaDon = maHoaDon;

      // Save DB
      const HD = await newHD.save();
      res.status(200).json(newHD);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // get all
  getAll: async (req, res) => {
    try {
      const allHD = await hoadonModel
        .find()
        .populate("IDKhachHang", ["HoTen"])
        .populate({ path: "IDSanPham", populate: "Tour" });
      res.status(200).json(allHD);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // update
  update: async (req, res) => {
    try {
      const hd = await hoadonModel.findById(req.body.id);
      await hd.updateOne(req.body.newValue);

      res.status(200).json("updated");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = HoaDonController;
