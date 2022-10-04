var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const message = ["Hello", "Everyone", "!"];
  const users = [
    { id: 1, name: "배" },
    { id: 2, name: "진" },
    { id: 3, name: "영" },
  ];
  res.render("users", { message: message, users: users });
});

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`Hello ${userId}`);
});
module.exports = router;
