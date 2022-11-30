const HoaDonController = require("../v1_controller/HoaDonController");

const router = require("express").Router();

// ADD
router.post("/add", HoaDonController.addHoaDon);

// get all
router.get("/getall", HoaDonController.getAll);
// get by id
router.get("/getbyid/:id", HoaDonController.getByID);
// get by id
router.get("/getbymahoadon/:mahoadon", HoaDonController.getByMaHoaDon);

// update
router.put("/update/:id", HoaDonController.updateHoaDon);

// delete
router.delete("/delete/:id", HoaDonController.deleteHoaDon);

module.exports = router;
