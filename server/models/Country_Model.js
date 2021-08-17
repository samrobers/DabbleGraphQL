const { Schema, model } = require("mongoose");

const CountrySchema = new Schema({
  Country: {
    type: String,
  },
  Year: {
    type: String,
  },

  Area: {
    type: Number,
  },
  Population: {
    type: Number,
  },
});

const Country_Model = model("Country_Model", CountrySchema);
module.exports = Country_Model;
