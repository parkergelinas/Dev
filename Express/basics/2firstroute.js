const express = require("express");
const app = express();

const PORT = process.env.PORT || 4002;
// Use static server to serve the Express Yourself Website
app.use(express.static("public"));

// Open a call to `app.get()` below:
app.get("/expressions", (req, res, next) => {});

app.listen(PORT, () => {
  console.log(`Cock on port ${PORT}`);
});

// Express uses app.get() to register routes to match GET requests.
// Express routes (including app.get()) usually take two arguments, a path (usually a string),
// and a callback function to handle the request and send a response.
