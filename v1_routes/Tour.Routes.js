const TourController = require("../v1_controller/TourController");
const multer = require("multer")
const router = require("express").Router();

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("1111111: ", file);
      cb(null, "publics/images/");
    },
    filename: function (req, file, cb) {
      
    //   var i = file.originalname.lastIndexOf(".")
    //   var str = file.originalname.slice(i)
    //   var nameImg = file.originalname.slice(0, i) + str
      // console.log("LOG1: ", file);
      // console.log("LOG2: ", nameImg);
      cb(null, "nameImg");
    },
  });
  
  var upload = multer({ storage: storage });

// ADD
router.post("/add", upload.single("HinhAnh"), TourController.addTour);

// get all
router.get("/getall", TourController.getAll);

// update
router.put("/update", TourController.updateTour);

// search
router.get("/timkiem", TourController.searchTour);

// delete
router.delete("/delete/:id", TourController.deleteTour);

module.exports = router;
