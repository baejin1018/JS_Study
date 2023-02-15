const express = require("express");
const router = express.Router();
const db = require("../models/sqlite-db");
const usersql = require("../models/user-sql");
const memosql = require("../models/memo-sql");

// // 로그인 안하고 사용자 리스트 보는 버전..
// router.get('/users/', function(req, res, next){
//   db.executeQuery(usersql.selectAllUserSql(), (error, rows)=>{
//     if(error) res.json({error:error.message})
//     res.json(rows);
//   });
// });

// // 로그인 안하고 사용자 정보 보는 버전..
// router.get('/users/:userid', function(req, res, next){
//   db.executeQuery(usersql.selectOneUserSql(req.params.userid), (error, rows)=>{
//     if(error) res.json({error:error.message})
//     res.json(rows);
//   });
// });

// // 본인 확인 안하고 지우는 api...
// router.delete('/users/:userid', function(req, res, next){
//   db.executeUpdate(usersql.deleteUserSql(req.params.userid));
//   res.end('');
// });

// 모든 사용자의 메모 조회
router.get("/memos/", function (req, res, next) {
  db.executeQuery(memosql.selectAllMemoSql(), (error, rows) => {
    if (error) res.json({ error: error.message });
    res.json(rows);
  });
});

module.exports = router;
