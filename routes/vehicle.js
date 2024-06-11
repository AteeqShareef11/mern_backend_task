const express = require("express");
const vehicleRouter = express.Router();
const { upload } = require("../utills/upload");

const { addVehicle, getAllVehicle } = require("../controller/vehicle");

vehicleRouter.post("/createVehicle", upload.any(), addVehicle);
vehicleRouter.get("/getVehicles", getAllVehicle);

module.exports = vehicleRouter;
