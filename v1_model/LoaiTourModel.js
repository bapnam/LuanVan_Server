const mongoose = require("mongoose");

const LoaiTourSchema = new mongoose.Schema(
  {
    TenLoaiTour: {
        type: String
    }
  },
  { timestamps: true }
);

let LoaiTour = mongoose.model("LoaiTour", LoaiTourSchema);

module.exports = LoaiTour;
