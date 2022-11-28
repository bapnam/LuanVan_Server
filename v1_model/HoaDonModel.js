const mongoose = require("mongoose");

const hoaDonSchema = new mongoose.Schema(
  {
    MaHoaDon: {
      type: String,
    },

    IDKhachHang: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NguoiDung",
    },
    IDSanPham: {
      Tour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tour",
      },
      KhachSan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "KhachSan",
      },
    },
    // PhuongThuc_TT: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "PhuongThucThanhToan",
    // },
    TongTien: {
      type: Number,
    },
  },
  { timestamps: true }
);

let HoaDon = mongoose.model("HoaDon", hoaDonSchema);

module.exports = HoaDon;
