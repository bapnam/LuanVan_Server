const mongoose = require("mongoose");

// Create Khach Hang Schema
const NguoiDungSchema = new mongoose.Schema(
  {
    HoTen: {
      type: String,
      required: true,
    },
    NgaySinh: {
      type: String,
    },
    SDT: {
      type: String,
      required: true,
      unique: true,
      length: 10,
    },
    DiaChi: [
      {
        TenDiaChi: { type: String, default: "Địa Chỉ 1" },
        TinhTP: { type: String },
        QuanHuyen: { type: String },
        XaPhuong: { type: String },
        ChiTiet: { type: String },
      },
    ],
    GioiTinh: {
      type: String,
    },
    Email: {
      type: String,
      required: true,
    },
    CMND: {
      type: String,
      required: true,
      unique: true,
      pattern: "[0-9]",
    },
    MatKhau: {
      type: String,
      required: true,
      minlength: 6,
    },
    YeuThich: {
      Tour: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Tour",
        },
      ],
      KhachSan: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "KhachSan",
        },
      ],
    },
    LichSu: {
      LSTour: [
        {
          Tour: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tour",
          },
          TrangThai: {
            type: String,
          },
        },
      ],
      LSKhachSan: [
        {
          KhachSan: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "KhachSan",
          },
          TrangThai: {
            type: String,
          },
        },
      ],
    },
    Quyen: {
      type: String,
      default: "NguoiMua",
    },
  },
  { timestamps: true }
);

let NguoiDung = mongoose.model("NguoiDung", NguoiDungSchema);

module.exports = NguoiDung;
