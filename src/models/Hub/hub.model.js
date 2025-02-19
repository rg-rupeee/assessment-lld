const mongoose = require("mongoose");

const hubSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    ref: 'Hub',
    type: mongoose.Schema.ref,
    required: true
  },
  address: {
    ref: 'Address',
    type: mongoose.Schema.ref,
    required: true
  },
})

module.exports = hubSchema;