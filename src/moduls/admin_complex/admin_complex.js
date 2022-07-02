const admin_complex = require("./model");

module.exports = {
  GET: async (req, res) => {
    const companies = await admin_complex.getAllCompanies();
    const complexes = await admin_complex.getAllComplexes();
    res.render("admin_complex", { companies, complexes });
  },
  POST: async (req, res) => {
    const { complex_name, complex_adress, company_id, complex_id } = req.body;

    if (complex_name) {
      const newComplex = await admin_complex.addComplex(
        complex_name,
        complex_adress,
        company_id
      );
    } else if (complex_id) {
      const deleteComplex = await admin_complex.deleteComplex(complex_id);
    }
    res.redirect("/admin_complex");
  },
};
