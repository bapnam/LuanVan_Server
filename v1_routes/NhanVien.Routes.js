const NhanVienController = require("../v1_controller/NhanVienControler")

const router = require("express").Router();

// ADD
router.post("/add", NhanVienController.addNhanVien);

module.exports = router;