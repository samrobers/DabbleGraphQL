const { Country_Model } = require("../models");

const resolvers = {
  Query: {
    countries: async () => {
      return await Country_Model.find();
    },
    count_by_id: async (parent, { _id }) => {
      console.log("Country by ID Resolver");
      return await Country_Model.find({ _id }).populate("count_by_id");
    },
  },
};

module.exports = resolvers;
