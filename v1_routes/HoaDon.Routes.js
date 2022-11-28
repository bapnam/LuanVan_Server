const HoaDonController = require("../v1_controller/HoaDonController")

const router = require("express").Router();

// ADD
router.post("/add", HoaDonController.addHoaDon);

// get all
router.get("/getall", HoaDonController.getAll)

module.exports = router;