const NguoiDungController = require("../v1_controller/NguoiDungController");
const ThongKeController = require("../v1_controller/ThongKeController");

const router = require("express").Router();

/// Thong ke
//
router.get("/tongdoanhthu/:id", ThongKeController.TongDoanhThu);

router.post(
  "/tongdoanhthutheongay/:id",
  ThongKeController.TongDoanhThuTheoNgay
);

router.post("/thongkeall/:id", ThongKeController.thongKeAll);

module.exports = router;
