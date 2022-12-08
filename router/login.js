const exp = require('express').Router()

exp.get("/h", (req, res) => {
  res.send("he;;p")
});

module.exports = exp