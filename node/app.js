const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/nodecrypto", (req, res) => {
  bcrypt.genSalt(13, function(err, salt) {
    bcrypt.hash("somebigstringtoconnect", salt, function(err, hash) {
      res.json({ hash });
    });
  });
});

app.get("/gocrypto", (req, res) => {
  axios
    .get("http://go-of-go-node:3003/gocrypto")
    .then(function(response) {
        res.send(response.data);
    })
    .catch(function(error) {
      console.log(error.message);
      res.send("error");
    });
});

app.listen(3001, () => {
  console.log(`I'm running at 3001`);
});
