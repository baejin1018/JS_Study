const jwt = require("jsonwebtoken");
const { Domain, User, Post, Hashtag } = require("../models");

exports.createToken = async (req, res) => {
  const { clientSecret } = req.body;
  try {
    const domain = await Domain.findOne({
      where: { clientSecret },
      include: {
        model: User,
        attribute: ["nick", "id"],
      },
    });
    if (!domain) {
      return res.status(401).json({
        code: 401,
        message: "등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요",
      });
    }
    const token = jwt.sign(
      {
        id: domain.User.id,
        nick: domain.User.nick,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1m", // 1분
        issuer: "nodebird",
      }
    );
    return res.json({
      code: 200,
      message: "토큰이 발급되었습니다",
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: "서버 에러",
    });
  }
};

exports.tokenTest = (req, res) => {
  res.json(res.locals.decoded);
};

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attribute: ["nick", "id"],
      },
    });
    if (posts) {
      console.log(posts);
      res.json({
        code: 200,
        payload: posts,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      code: 500,
      message: "Error",
    });
  }
};

exports.getMyPost = async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      where: { userId: res.locals.decoded.id },
      include: {
        model: User,
        attribute: ["nick", "id"],
      },
    });
    if (posts) {
      console.log(posts);
      res.json({
        code: 200,
        payload: posts,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      code: 500,
      message: "Error",
    });
  }
};

exports.getPostsByHashtag = async (req, res, next) => {
  try {
    const hashtag = await Hashtag.findOne({
      where: { title: req.params.title },
    });
    if (!hashtag) {
      return res.status(404).json({
        code: 404,
        message: "검색 결과가 없습니다.",
      });
    }
    const posts = await hashtag.getPosts({ include: [User] });
    return res.status(200).json({
      code: 200,
      payload: posts,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      code: 500,
      message: "Error",
    });
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const post = await Post.findOne({
      where: { id },
    });
    if (post) {
      await post.destroy();
    }
    res.status(200).json({
      code: 200,
      payload: post,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.editPost = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const content = req.body.content;
    const post = await Post.findOne({
      where: { id },
    });
    if (post) {
      post.content = content;
      await post.save();
    }
    res.status(200).json({
      code: 200,
      payload: post,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
