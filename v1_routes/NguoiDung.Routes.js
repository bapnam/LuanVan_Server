const NguoiDungController = require("../v1_controller/NguoiDungController");

const router = require("express").Router();

// ADD
router.post("/add", NguoiDungController.addNguoiDung);

// get one 
router.post("/dangnhap", NguoiDungController.getOne);

// update
router.put("/update/:id", NguoiDungController.updateNguoiDung);


module.exports = router;