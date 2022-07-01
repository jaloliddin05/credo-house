const company = require("./model");

module.exports = {
  GET: async (req, res) => {
    const companies = await company.getAllCompanies();

    res.render("admin_company", { companies });
  },
  POST: async (req, res) => {
    const { company_name, company_img, company_id } = req.body;

    if (company_name) {
      const newCompany = await company.addCompany(company_name, company_img);
    } else if (company_id) {
      const deletedCompany = await company.deleteCompany(company_id);
    }

    res.redirect("/admin_company");
  },
};
