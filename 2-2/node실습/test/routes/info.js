var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("info", { title: "info", message: "hi" });
});

module.exports = router;
