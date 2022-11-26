const mongoose = require("mongoose");

// Create Nhan Vien Schema
const KhachSanSchema = new mongoose.Schema(
  {
    MaSoNV: {
      type: String,
      required: true,
      unique: true,
    },
    HoTen: {
      type: String,
      required: true,
    },
    NgaySinh: {
      type: String,
      required: true,
    },
    SDT: {
      type: String,
      required: true,
      unique: true,    },
    DiaChi: [
      {
        TenDiaChi: { type: String, default: "Địa Chỉ 1" },
        TinhTP: { type: String},
        QuanHuyen: { type: String},
        XaPhuong: { type: String},
        ChiTiet: {type: String}
      },
    ],
    GioiTinh: {
      type: String,
      required: true,
    },
    CMND: {
      type: String,
      required: true,
      unique: true,
      pattern: "[0-9]",
    },
    Email: {
      type: String,
      required: true,
    },
    MatKhau: {
      type: String,
      required: true,
      minlength: 6,
    },
    
  },
  { timestamps: true }
);
let KhachSan = mongoose.model("KhachSan", KhachSanSchema);

module.exports = KhachSan;
