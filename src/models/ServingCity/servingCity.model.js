const mongoose = require("mongoose");

const servingCitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: mongoose.types.ref,
    required: true,
    ref: 'State'
  },
  country: {
    type: mongoose.types.ref,
    required: true,
    ref: 'State'
  },
})

module.exports = servingCitySchema;