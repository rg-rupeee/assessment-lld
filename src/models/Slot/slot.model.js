const mongoose = require("mongoose");
const constants = require("../../constants");

const testDriveCarSchema = mongoose.Schema({
  car: {
    type: mongoose.types.ref,
    required: true,
    ref: 'Car'
  },
  hub: {
    type: mongoose.types.ref,
    required: true,
    ref: 'Hub'
  },
  status: {
    type: String,
    valid: constants.TEST_DRIVE_CAR_STATUS
  }
})

module.exports = testDriveCarSchema;