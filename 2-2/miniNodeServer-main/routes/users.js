const express = require("express");
const router = express.Router();
const db = require("../models/sqlite-db");
const sql = require("../models/user-sql");
const memoSql = require("../models/memo-sql");
const authMiddleware = require("../middleware/auth");

// 새 사용자 추가할 때는 토큰 확인하지 않음.
router.post("/", function (req, res, next) {
  const user = req.body;
  console.log(req);
  if (!user || !user.userid || !user.password) {
    res.status(400).json({ error: "Invalid request." });
  }
  db.executeUpdate(sql.insertUser(user));
  res.end("");
});

// 로그인한 사용자가 본인 정보 보기
router.get("/:userid", authMiddleware, function (req, res, next) {
  if (req.params.userid != req.userid) {
    res.status(403).json({ error: "Permission denied." });
  } else {
    db.executeQuery(sql.selectOneUserSql(req.params.userid), (error, rows) => {
      if (error) res.json({ error: error.message });
      res.json(rows[0]);
    });
  }
});

// 로그인한 사용자 본인만 아이디 삭제 가능함.
router.delete("/:userid", authMiddleware, function (req, res, next) {
  if (req.params.userid != req.userid) {
    res.status(403).json({ error: "Permission denied." });
  }

  db.executeUpdate(sql.deleteUserSql(req.userid));
  db.executeUpdate(memoSql.deleteMemoByUserSql(req.userid));
  res.end("");
});
module.exports = router;
