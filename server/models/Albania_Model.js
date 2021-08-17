const { Schema, model } = require("mongoose");

const AlbaniaSchema = new Schema({
  Country: {
    type: String,
    trim: true,
  },
  Year: {
    type: String,
    trim: true,
  },
  Area_km: {
    type: Number,
    trim: true,
  },
  Total_Population: {
    type: Number,
    trim: true,
  },
});

const Albania_Model = model("Albania_Model", AlbaniaSchema);
module.exports = Albania_Model;
