const express = require("express");

const app = express();

app.use((req, res, next) => {
  let dbDomains = [
    "example.com",
    "example123.com",
    "custom-testing-api-2.herokuapp.com",
    "localhost",
    "custom-domain-api.herokuapp.com",
  ];
  if (dbDomains.includes(req.hostname)) {
    return next();
  } else {
    res.send(`Your domain ${req.hostname} is not configured with our server`);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
