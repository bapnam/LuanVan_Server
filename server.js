const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");

const HoaDonTouter = require("./v1_routes/HoaDon.Routes");
const KhachSanTouter = require("./v1_routes/KhachSan.Routes");
const LoaiTourTouter = require("./v1_routes/LoaiTour.Routes");
const NguoiDungTouter = require("./v1_routes/NguoiDung.Routes");
const NhanVienRouter = require("./v1_routes/NhanVien.Routes");
const TourTouter = require("./v1_routes/Tour.Routes");

//LOG---
//
const app = express();
const port = 9000;

// dotenv
dotenv.config();

//
app.use(express.json());
app.use(cors());
app.use(morgan("common"));

// app.use('/publics', express.static('publics'))

//LOG--- CONNECT MONGOO DB
//
mongoose.connect(process.env.MONGODB_URL, { dbName: "LuanVan" }, () => {
  try {
    console.log("--- Connected to MongoDB!");
  } catch (error) {
    console.log("MongoDB: ", error);
  }
});

//LOG--- ROUTES
//

app.use("/v1/hoadon", HoaDonTouter);
// app.use("/v1/khachsan", KhachSanTouterTouter)
app.use("/v1/loaitour", LoaiTourTouter);
app.use("/v1/nguoidung", NguoiDungTouter);
app.use("/v1/nhanvien", NhanVienRouter);
app.use("/v1/tour", TourTouter);

//LOG---
//
app.listen(port, () => {
  console.log("--- Server is running port " + port + "...");
});
