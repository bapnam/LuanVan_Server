const TourModel = require("../v1_model/TourModel");

const TourController = {
  // ADD
  addTour: async (req, res) => {
    try {
      const newTour = new TourModel(req.body);

      // Save DB
      const tour = await newTour.save();
      res.status(200).json(newTour);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // delete
  deleteTour: async (req, res) => {
    try {
      await TourModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // update 
  updateTour: async (req, res) => {
    try {
      const status = req.body.status;
      const tour = await TourModel.findById(req.body.id);

      switch (status) {
        // update gia
        case "price": {
          await tour.updateOne({ $set: { price: req.body.price } });
          res.status(200).json("Update price done.");
          break;
        }
        // update nguoi huong dan
        case "guider": {
          await tour.updateOne({ $set: { guider: req.body.guider } });
          res.status(200).json("Update guider done.");
          break;
        }

        default: {
          // mac dinh khi k co status
          res.status(200).json("Update khong hop le!");
          break;
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = TourController;
