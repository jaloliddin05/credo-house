const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { access_token } = req.cookies;

  if (!access_token) {
    return res.redirect("/login");
  }

  jwt.verify(access_token, process.env.SECRET_KEY, (err, decode) => {
    if (err instanceof jwt.TokenExpiredError) {
      return res.redirect("/login");
    }

    if (err instanceof jwt.JsonWebTokenError) {
      return res.redirect("/login");
    }

    req.data = decode;

    next();
  });
};
