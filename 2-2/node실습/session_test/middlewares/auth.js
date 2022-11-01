module.exports = (req, res, next) => {
  if (req.session.userId != undefined) next();
  else res.redirect("/auth/signin");
};
