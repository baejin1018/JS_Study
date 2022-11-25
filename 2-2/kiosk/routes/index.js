const express = require("express");
const router = express.Router();
const db = require("../models/sqlite-db");
const memosql = require("../models/memo-sql");
const authMiddleware = require("../middleware/auth")
/* GET home page. */
router.get("/", function (req, res, next) {
  db.executeQuery(memosql.selectAllMemoSql(), (error, rows) => {
    if (error) {
      res.json({ error: error.message });
      console.log(error);
    }
    res.render("index", { rows });
  });
});

router.get("/moreinfo/:memoid", function (req, res, next) {
  db.executeQuery(
    memosql.selectOneMemoSql(req.params.memoid),
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.render("moreInfo",{rows});
      }
     
    }
  );
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/admin", function (req, res) {
  db.executeQuery(memosql.selectAllMemoSql(), (error, rows) => {
    if (error) {
      res.json({ error: error.message });
      console.log(error);
    }
    res.render("admin", { rows });
  });
});

module.exports = router;
