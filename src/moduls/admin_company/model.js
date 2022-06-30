const { fetchData } = require("../../utils/pg");

const getAllCompaniesQuery = `select * from companies`;

const getAllCompanies = () => fetchData(getAllCompaniesQuery);

const addCompanyQuery = `insert into companies(company_name,company_img) values($1,$2)`;

const addCompany = (name, img) => fetchData(addCompanyQuery, name, img);

const deleteCompanyQuery = `delete from companies where company_id = $1`;
const deleteCompany = (id) => fetchData(deleteCompanyQuery, id);

module.exports = {
  getAllCompanies,
  addCompany,
  deleteCompany,
};
