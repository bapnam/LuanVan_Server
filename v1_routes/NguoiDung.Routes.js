const NguoiDungController = require("../v1_controller/NguoiDungController");

const router = require("express").Router();

// ADD
router.post("/add", NguoiDungController.addNguoiDung);

// update
router.put("/update", NguoiDungController.updateNguoiDung);

// get one 
router.get("/dangnhap", NguoiDungController.getOne);

module.exports = router;