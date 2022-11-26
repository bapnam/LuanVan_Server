const LoaiTourController = require("../v1_controller/LoaiTourController")

const router = require("express").Router();

// ADD
router.post("/add", LoaiTourController.addLoaiTour);

module.exports = router;