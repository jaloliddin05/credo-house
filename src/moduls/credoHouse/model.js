const { fetchData } = require("../../utils/pg");

const getAllCompaniesQuery = `select * from companies`;

const getAllCompanies = () => fetchData(getAllCompaniesQuery);

module.exports = {
  getAllCompanies,
};
