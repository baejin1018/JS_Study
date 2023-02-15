const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // 헤더에서 토큰을 찾음.
  const token = req.headers.token;
  console.log(token);
  if (!token) {
    return res.status(403).json({ error: "Permission denied." }); // 토큰 없음 == 알 수 없는 사용자
  }

  // 토큰 디코딩.
  const checkToken = new Promise((resolve, reject) => {
    jwt.verify(token, req.app.get("jwt-secret"), (err, decodedToken) => {
      if (err) reject(err);
      resolve(decodedToken);
    });
  });

  // 인증 실패
  const onError = (error) => {
    console.log(error);
    res.status(403).json({
      error: error.message,
    });
  };

  // 인증 절차 실행
  checkToken
    .then((decodedToken) => {
      req.decodedToken = decodedToken;
      req.userid = decodedToken.sub;
      next();
    })
    .catch(onError);
};

module.exports = authMiddleware;
