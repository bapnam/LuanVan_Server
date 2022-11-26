const TourController = require("../v1_controller/TourController");

const router = require("express").Router();

// ADD
router.post("/add", TourController.addTour);

// update gia
router.put("/update", TourController.updateTour);


module.exports = router;