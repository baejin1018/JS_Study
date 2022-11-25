const express = require('express');
const router = express.Router();
const db = require('../models/sqlite-db');
const usersql = require('../models/user-sql');
const memosql = require('../models/memo-sql');
const authMiddleware = require("../middleware/auth");
const multer = require("multer");

// 로그인 안하고 사용자 리스트 보는 버전..
router.get('/users/', function(req, res, next){
  db.executeQuery(usersql.selectAllUserSql(), (error, rows)=>{
    if(error) res.json({error:error.message})
    res.json(rows);
  });
});

// 로그인 안하고 사용자 정보 보는 버전..
router.get('/users/:userid', function(req, res, next){
  db.executeQuery(usersql.selectOneUserSql(req.params.userid), (error, rows)=>{
    if(error) res.json({error:error.message})
    res.json(rows);
  });
});

// 본인 확인 안하고 지우는 api...
router.delete('/users/:userid', function(req, res, next){
  db.executeUpdate(usersql.deleteUserSql(req.params.userid));
  res.end('');
});

// 모든 사용자의 메모 조회
router.get('/memos/', function(req, res, next){
  db.executeQuery(memosql.selectAllMemoSql(), (error, rows)=>{
    if(error) res.json({error:error.message})
    res.json(rows);
  });
});

router.get('/:memoid', function (req, res, next) {
  db.executeQuery(
    memosql.selectOneMemoSql(req.params.memoid),
    (err, rows) => {
      console.log(err);
      if (err) res.status(500).json({ error: err.message });
      console.log(rows)
      res.render("update",{rows});
    }
  );
});

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/uploads");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.put(
  "/:memoid",
  [authMiddleware, upload.single("file")],
  function (req, res, next) {
    const memo = req.body;
    memo.title = memo.title.replace(/\"/g, "");
    memo.content = memo.content.replace(/\"/g, "");
    memo.memoid = req.params.memoid;
    memo.savedTime = Date.now();
    if (req.file) {
      memo.originalFileName = req.file.originalname;
      memo.fileUrl = "uploads/" + req.file.filename;
    } else {
      memo.originalFileName = null;
      memo.fileUrl = null;
    }
    db.executeUpdate(sql.updateMemoSql(memo));
    res.end("");
  }
);

module.exports = router;
