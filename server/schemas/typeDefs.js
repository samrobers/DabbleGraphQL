const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Albania_Model {
    Country: String
    Year: String
    Area: Int
    Population: Int
  }
  type Query {
    all_albania_data: [Albania_Model]
    count_by_id(countryId: String!): [Albania_Model]
  }
`;

module.exports = typeDefs;
