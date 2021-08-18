const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

const db = require("./config/connection");

server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
