const TourController = require("../v1_controller/TourController");

const router = require("express").Router();

// ADD
router.post("/add", TourController.addTour);

// get all
router.get("/getall", TourController.getAll);

// update
router.put("/update", TourController.updateTour);

// search
router.get("/timkiem", TourController.searchTour);

module.exports = router;
