const admin_complex = require("./model");

module.exports = {
  GET: async (req, res) => {
    const companies = await admin_complex.getAllCompanies();
    const complexes = await admin_complex.getAllComplexes();
    res.render("admin_complex", { companies, complexes });
  },
  POST: async (req, res) => {},
};
