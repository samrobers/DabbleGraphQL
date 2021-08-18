const db = require("../config/connection");
const { AlbaniaModel } = require("../models");
const AlbaniaData = require("./countryData.json");
db.once("open", async () => {
  await AlbaniaModel.deleteMany({});

  const AlbaniaInfo = await AlbaniaModel.insertMany(AlbaniaData);

  console.log("Albania Data Seeded");
  process.exit(0);
});
