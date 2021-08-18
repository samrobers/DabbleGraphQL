const { Schema, model } = require("mongoose");

const albaniaSchema = new Schema({
  country: {
    type: String,
  },
  year: {
    type: String,
  },
  areaKm: {
    type: Number,
  },
  totalPopulation: {
    type: Number,
  },
});

const AlbaniaModel = model("AlbaniaModel", albaniaSchema);
module.exports = AlbaniaModel;
