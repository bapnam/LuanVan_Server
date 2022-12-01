const mongoose = require("mongoose");

// Create Nhan Vien Schema
const TourSchema = new mongoose.Schema(
  {
    TieuDe: {
      // Hiển thị tiêu đề
      type: String,
      // required: true,
      // trim: true,
    },
    LoaiTour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LoaiTour",
    },
    MoTa: {
      // Thông tin địa điểm mo ta
      type: String,
      // required: true,
      // trim: true,
    },
    DiaDiem: {
      // Địa điểm hiển thị trên card di den
      type: String,
      // required: true,
      // trfim: true,
    },

    ThanhPho: {
      // thanh pho den
      type: String,
      // required: true,
      // trim: true,
    },
    LichTrinh: {
      // lich trinh
      type: String,
      // required: true,
      // trim: true,
    },
    // KhachSan: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "KhachSan",
    // },
    NguoiHuongDan: {
      // nguoi huong dan
      type: String,
      // required: true,
    },

    SoNgay: {
      // So ngay di dự kiến
      type: Number,
      // required: true,
    },
    // endDate: {
    //   type: String,
    //   required: true,
    // },
    Gia: {
      // Giá tour / ngày
      type: Number,
      // required: true,
    },
    email: {
      // email nguoi dang tour
      type: String,
      // required: true,
    },
    SDT: {
      // sdt nguoi dang tour
      type: String,
      // required: true,
    },
    HinhAnh: {
      // Hình ảnh hiển thị
      type: String,
    },
  },
  { timestamps: true }
);
let Tour = mongoose.model("Tour", TourSchema);

module.exports = Tour;
