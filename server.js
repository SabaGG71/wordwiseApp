require("dotenv").config();

const express = require("express");
const path = require("path");
const jsonServer = require("json-server");

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "dist")));

// Endpoint to serve the JSON Server
const router = jsonServer.router("data/cities.json");
const middlewares = jsonServer.defaults();

app.use("/api", middlewares);
app.use("/api", router);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
