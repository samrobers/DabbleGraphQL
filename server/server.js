//start base server
//bring in db mongoose connection
//bring in typedefs, resolvers
//create new apollo server
//apply middleware
//combine server with db

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}`);
});
