const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Country_Model {
    Country: String
    Year: String
    Area: Integer
    Population: Integer
  }
  type Query {
    countries: [Country_Model]
    count_by_id(countryId: String!): [Country_Model]
  }
`;
