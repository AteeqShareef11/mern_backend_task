const Vehicle = require("../model/vehicle");

exports.addVehicle = async (req, res) => {
  try {
    const { carModel, price, phone, maxPics, city } = req.body;
    if (!carModel || !price || !maxPics || !phone || !city) {
      return res.status(400).json({
        success: false,
        message: "Please Provide All Required Fields",
      });
    }
    if (req.files) {
      const pictures = req.files.map((file) => "/" + file.path);
      await Vehicle.create({ carModel, price, phone, maxPics, city, pictures });
      return res
        .status(200)
        .json({ success: true, message: "Vehicle Added Successfully" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Please Add Image" });
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.find({});
    if (!vehicle) {
      return res
        .status(400)
        .json({ success: false, message: "No Vehicle Available" });
    }
    return res.status(200).json({ success: true, data: vehicle });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
