const express = require("express");
const { test, editPost, deletePost } = require("../controllers");
const {
  searchByHashtag,
  getMyPosts,
  getPosts,
} = require("../controllers");

const router = express.Router();

router.get("/test", test);

// router.get("/", renderMain);
router.get("/", getPosts);

router.get("/myposts", getMyPosts);

router.get("/search", searchByHashtag);

router.post("/update/:id", editPost);
router.delete("/delete/:id", deletePost);
module.exports = router;
