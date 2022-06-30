const { sign } = require("../../utils/jwt");

module.exports = {
  GET: (_, res) => {
    res.render("login");
  },

  POST: (req, res) => {
    const { username, password } = req.body;

    if (username == process.env.ISMI && password == process.env.PASSWORD) {
      res.cookie("access_token", sign({ username, password }), {
        maxAge: 12 * 3600 * 1000,
      });

      res.redirect("/admin");
    } else {
      res.redirect("/login");
    }
  },
};
