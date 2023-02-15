const express = require("express");
const router = express.Router();
const sqlite = require("../models/sqlite-db");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.end("");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/admin", function (req, res) {
  res.render("admin");
});
module.exports = router;
