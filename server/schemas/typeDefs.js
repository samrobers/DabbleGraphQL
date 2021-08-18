const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type AlbaniaModel {
    country: String
    year: String
    areaKm: Int
    totalPopulation: Int
  }
  type Query {
    allAlbaniaData: [AlbaniaModel]
    albaniaById(albaniaId: ID!): AlbaniaModel
  }
  type Mutation {
    removeData(albaniaId: ID!): AlbaniaModel
    addData(
      country: String!
      year: String!
      areaKm: Int!
      totalPopulation: Int!
    ): AlbaniaModel
  }
`;

module.exports = typeDefs;
