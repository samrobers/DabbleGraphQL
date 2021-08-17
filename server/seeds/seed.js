const db = require("../config/connection");
const Country_Model = require("../models");
const CountryData = require("./Country_Data.json");

db.once("open", async () => {
  await Country_Model.deleteMany({});

  const Countries = await Country_Model.insertMany(CountryData);

  console.log("Countries seeded!");
  process.exit(0);
});
