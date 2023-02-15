const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");

router.post("/login", function (req, res, next) {
  const { id, password } = req.body;
  try {
    if (id != "admin") {
      return res.status(400).json({
        status: 400,
        error: "아이디가 옳지 않습니다.",
      });
    }
    if (password != 1234) {
      return res.status(400).json({
        status: 400,
        error: "비밀번호가 옳지 않습니다.",
      });
    }
    const token = jwt.sign(
      {
        id: id,
        password: password,
      },
      "kiosk",
      {
        expiresIn: "1d",
        issuer: "kiosk",
      }
    );
    return res.status(200).json({
      status: 200,
      message: "로그인 성공!",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      error: "로그인 실패",
    });
  }
});

router.post("/autologin", authMiddleware, function (req, res, next) {
  res.json({ userid: req.userid, name: req.decodedToken.name });
});
module.exports = router;
