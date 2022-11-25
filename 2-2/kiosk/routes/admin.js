const express = require('express');
const router = express.Router();
const db = require('../models/sqlite-db');
const memosql = require('../models/memo-sql');
const authMiddleware = require("../middleware/auth");
const multer = require("multer");


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
    console.log("memo",req)
    const memo = req.body;
    memo.title = memo.title.replace(/\"/g, "");
    memo.content = memo.content.replace(/\"/g, "");
    memo.memoid = req.params.memoid;
    memo.description = req.description;
    memo.savedTime = Date.now();
    if (req.file) {
      memo.originalFileName = req.file.originalname;
      memo.fileUrl = "uploads/" + req.file.filename;
    } else {
      memo.originalFileName = null;
      memo.fileUrl = null;
    }
    db.executeUpdate(memosql.updateMemoSql(memo));
    res.end("");
  }
);

module.exports = router;
