//start base server
//bring in db mongoose connection
//bring in typedefs, resolvers
//create new apollo server
//apply middleware
//combine server with db

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./config/connection");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app });
app.use(expres.urlencoded({ extended: true }));
app.use(express.json());

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`);
  });
});
