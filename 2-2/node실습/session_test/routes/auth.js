var express = require("express");
var router = express.Router();
var pbkdf2 = require("../modules/pbkdf2");

var db = require("../model/db");
var sql = require("../model/sql");

/* GET home page. */
router.get("/signin", function (req, res) {
  res.render("signin");
});

router.get("/signup", function (req, res) {
  res.render("signup");
});
module.exports = router;

router.post("/signup", async (req, res) => {
  const { userId, password } = req.body;
  const salt = await pbkdf2.getSalt();
  const key = await pbkdf2.getKey(password, salt);
  db.executeSelect(sql.insertUser(userId, key, salt));
  res.redirect("/");
});

router.post("/signin", async (req, res) => {
  const { userId, password } = req.body;
  try {
    const rows = await db.executeSelect(sql.selectUserById(userId));
    if (rows.length > 0) {
      const salt = rows[0].salt;
      const key = await pbkdf2.getKey(password, salt);
      if (key == rows[0].password) {
        console.log("Login성공");
        req.session.userId = userId;
      }
    }
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});

router.get("/signout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

module.exports = router;
