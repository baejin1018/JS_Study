const { Post, Hashtag } = require("../models");

exports.afterUploadImage = (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
};

exports.uploadPost = async (req, res, next) => {
  if (req.body.id) {
    res.redirect(`/post/${req.body.id}/edit?content=${req.body.content}`);
  } else {
    try {
      const post = await Post.create({
        content: req.body.content,
        img: req.body.url,
        UserId: req.user.id,
      });
      const hashtags = req.body.content.match(/#[^\s#]*/g);
      if (hashtags) {
        const result = await Promise.all(
          hashtags.map((tag) => {
            return Hashtag.findOrCreate({
              where: { title: tag.slice(1).toLowerCase() },
            });
          })
        );
        await post.addHashtags(result.map((r) => r[0]));
      }
      res.redirect("/");
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
};

exports.editPost = async (req, res, next) => {
  try {
    const content = String(req.query.content);
    await Post.update(
      {
        content: content,
      },
      {
        where: { id: req.params.id },
      }
    );
    const post = await Post.findByPk(req.params.id);

    const hashtags = content.match(/#[^\s#]*/g);
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) => {
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },
          });
        })
      );
      await post.addHashtags(result.map((r) => r[0]));
    }
    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    if (req.params.id) {
      await Post.destroy({ where: { id: req.params.id } });
      res.send("success");
    } else {
      res.status(404).send("no post-id");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
