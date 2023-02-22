const express = require("express");
const app = express();

// Serves Express Yourself website
app.use(express.static("public"));

const { getElementById, seedElements } = require("./utils");

const expressions = [];
seedElements(expressions, "expressions");

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static("public"));

// Get all expressions
app.get("/expressions", (req, res, next) => {
  res.send(expressions);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Express servers send responses using the .send() method on the response object.
// .send() will take any input and include it in the response body
