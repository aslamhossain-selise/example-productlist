const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
////////// connecting with mongo //////////////

app.get("/productlist", (req, res) => {
  res.send({ message: "working" });
});

app.listen(process.env.PORT || 8080, () =>
  console.log("I am listening from 8080")
);
