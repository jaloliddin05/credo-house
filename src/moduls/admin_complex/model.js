const { fetchData } = require("../../utils/pg");

const getAllCompaniesQuery = `select * from companies`;

const getAllCompanies = () => fetchData(getAllCompaniesQuery);

const getAllComplexesQuery = `select * from complexes`;

const getAllComplexes = () => fetchData(getAllComplexesQuery);

module.exports = {
  getAllCompanies,
  getAllComplexes,
};
