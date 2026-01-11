const express = require("express");
const routeCountry = require("./country-router");
const app = express();

app.post("/sos/:country", (req, res) => {
  const number = routeCountry(req.params.country);
  res.send(`SOS routed to ${number}`);
});

app.listen(8080, () =>
  console.log("🌍 SURAKSHA-OMEGA Global Backend Live")
);
