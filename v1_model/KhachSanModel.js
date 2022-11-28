const mongoose = require("mongoose");

// Create Nhan Vien Schema
const KhachSanSchema = new mongoose.Schema(
  {
    TenKhachSan: {
      type: String,
      required: true,
    },
    DiaChi: {
      TinhTP: { type: String },
      QuanHuyen: { type: String },
      XaPhuong: { type: String },
      ChiTiet: { type: String },
    },
    SDT: {
      type: String,
      required: true,
      unique: true,
    },
    Email: {
      type: String,
    },
    MoTa: {
      type: String
    }
  },
  { timestamps: true }
);
let KhachSan = mongoose.model("KhachSan", KhachSanSchema);

module.exports = KhachSan;
