var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const users = [
    { id: 1, name: "배" },
    { id: 2, name: "진" },
    { id: 3, name: "영" },
  ];
  res.json(users);
});

module.exports = router;
