const credo = require("./model");

module.exports = {
  GET: async (req, res) => {
    const allCompanies = await credo.getAllCompanies();

    res.render("home", { allCompanies });
  },
};
