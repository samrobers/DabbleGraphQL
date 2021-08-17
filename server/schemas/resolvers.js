const { Albania_Model } = require("../models");

const resolvers = {
  Query: {
    all_albania_data: async () => {
      return await Albania_Model.find();
    },
    count_by_id: async (parent, { _id }) => {
      console.log("Country by ID Resolver");
      return await Albania_Model.find({ _id }).populate("count_by_id");
    },
  },
};

module.exports = resolvers;
