const { AlbaniaModel } = require("../models");

const resolvers = {
  Query: {
    allAlbaniaData: async () => {
      return await AlbaniaModel.find({});
    },
    albaniaById: async (parent, { albaniaId }) => {
      return await AlbaniaModel.findOne({ _id: albaniaId });
    },
  },
  Mutation: {
    addData: async (parent, { country, year, areaKm, totalPopulation }) => {
      return AlbaniaModel.create({ country, year, areaKm, totalPopulation });
    },
    removeData: async (parent, { albaniaId }) => {
      return await AlbaniaModel.findOneAndDelete({ _id: albaniaId });
    },
  },
};

module.exports = resolvers;
