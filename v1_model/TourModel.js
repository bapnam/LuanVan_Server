const mongoose = require("mongoose");

// Create Nhan Vien Schema
const TourSchema = new mongoose.Schema(
  {
    title: {
      // Hiển thị tiêu đề
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LoaiTour",
    },
    content: {
      // Thông tin địa điểm mo ta
      type: String,
      required: true,
      trim: true,
    },
    place: {
      // Địa điểm hiển thị trên card di den
      type: String,
      required: true,
      trfim: true,
    },

    city: {
      // thanh pho den
      type: String,
      required: true,
      trim: true,
    },
    schedule: {
      // lich trinh
      type: String,
      required: true,
      trim: true,
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "KhachSan",
    },
    guider: {
      // nguoi huong dan
      type: String,
      // required: true,
    },

    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    email: {
      // email nguoi dang tour
      type: String,
      required: true,
    },
    phone: {
      // sdt nguoi dang tour
      type: Number,
      required: true,
    },
    thumbnail: {
      // Hình ảnh hiển thị
      type: Object,
      url: {
        type: URL,
      },
      public_id: {
        type: String,
      },
    },
  },
  { timestamps: true }
);
let Tour = mongoose.model("Tour", TourSchema);

module.exports = Tour;
