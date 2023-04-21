const express = require("express");

const {
  verifyToken,
  apiLimiter,
  corsWhenDomainMatches,
} = require("../middlewares");

const {
  createToken,
  tokenTest,
  getMyPost,
  getPostsByHashtag,
  editPost,
  deletePost,
  getAllPosts,
} = require("../controllers/v2");

const router = express.Router();

router.use(corsWhenDomainMatches);

// POST /v2/token
router.post("/token", apiLimiter, createToken);

// POST /v2/test
router.get("/test", apiLimiter, verifyToken, tokenTest);

// GET /v2/posts
router.get("/posts", apiLimiter, verifyToken, getAllPosts);

// GET /v2/posts/my
router.get("/posts/my", apiLimiter, verifyToken, getMyPost);

// GET /v2/posts/hashtag/:titles
router.get("/posts/hashtag/:title", apiLimiter, verifyToken, getPostsByHashtag);

// GET /v2/posts/edit/:id
router.post("/posts/edit/:id", apiLimiter, verifyToken, editPost);

// GET /v2/posts/delete/:id
router.get("/posts/delete/:id", apiLimiter, verifyToken, deletePost);

module.exports = router;
