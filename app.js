// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("The Blog API");
});

//  ROUTES
const blogController = require("./controllers/blogController.js");
app.use("/blogs", blogController);

const userController = require("./controllers/userController.js");
app.use("/users", userController);

const searchRoute = require('./controllers/searchController.js');
app.use('/search', searchRoute)


// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;