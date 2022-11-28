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
        case "Gia": {
          await tour.updateOne({ $set: { Gia: req.body.newValue } });
          res.status(200).json("updated");
          break;
        }
        // update nguoi huong dan
        case "NguoiHuongDan": {
          await tour.updateOne({ $set: { NguoiHuongDan: req.body.newValue } });
          res.status(200).json("updated");
          break;
        }
        // update Loai tour
        case "LoaiTour": {
          await tour.updateOne({ $set: { LoaiTour: req.body.newValue } });
          res.status(200).json("updated");
          break;
        }
        // update Lich Trinh
        case "LichTrinh": {
          await tour.updateOne({ $set: { LichTrinh: req.body.newValue } });
          res.status(200).json("updated");
          break;
        }
        // update So ngay
        case "SoNgay": {
          await tour.updateOne({ $set: { SoNgay: req.body.newValue } });
          res.status(200).json("updated");
          break;
        }

        default: {
          // mac dinh khi k co status
          res.status(200).json("noUpdate");
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
