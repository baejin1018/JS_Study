const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");
const db = require("../models/sqlite-db");
const sql = require("../models/user-sql");

router.post("/login", function (req, res, next) {
  const { userid, password } = req.body;
  const secret = req.app.get("jwt-secret");
  console.log(req.body);
  if (!userid || !password) {
    return res.status(400).json({
      error: "Invalid parameters",
    });
  }

  async function login(rows) {
    let user = null;
    if (rows != null) user = rows[0];
    if (user == null) {
      throw new Error("Login failed");
    } else {
      console.log(user);
      if (user.password == password) return user;
      else throw new Error("Login failed");
    }
  }

  async function authorize(user) {
    const payload = {
      sub: user.userid,
      name: user.name,
      aud: "miniServer", // receiver
      iat: Math.floor(Date.now() / 1000), // issued at
    };
    const option = {
      algorithm: "HS256",
      expiresIn: "100d",
      issuer: "miniServer",
    };
    const result = {
      token: jwt.sign(payload, secret, option),
      name: user.name,
      userid: user.userid,
    };
    console.log(result);
    return result;
  }

  async function respond(result) {
    res.json(result);
  }

  const onError = (error) => {
    console.log("auth-done with error");
    res.status(403).json({
      error: error.message,
    });
  };

  db.executeQuery(sql.selectOneUserSql(userid), (error, rows) => {
    login(rows).then(authorize).then(respond).catch(onError);
  });
});

router.post("/autologin", authMiddleware, function (req, res, next) {
  res.json({ userid: req.userid, name: req.decodedToken.name });
});
module.exports = router;
