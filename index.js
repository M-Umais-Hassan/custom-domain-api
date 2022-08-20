const express = require("express");
var vhost = require("vhost");

const app = express();

app.use((req, res, next) => {
  let dbDomains = [
    "example.com",
    "example123.com",
    "custom-testing-api-2",
    "localhost",
  ];
  if (dbDomains.includes(req.hostname)) {
    return next();
  } else {
    res.send("Your domain is not configured with our server");
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
