const { fetchData } = require("../../utils/pg");

const getAllCompaniesQuery = `select * from companies`;

const getAllCompanies = () => fetchData(getAllCompaniesQuery);

const getAllComplexesQuery = `select * from complexes`;

const getAllComplexes = () => fetchData(getAllComplexesQuery);

const addComplexQuery = `insert into complexes(complex_name,complex_adress,company_id) values($1,$2,$3)`;

const addComplex = (name, adress, id) =>
  fetchData(addComplexQuery, name, adress, id.trim());

const deleteComplexQuery = `delete from complexes where complex_id = $1`;

const deleteComplex = (id) => fetchData(deleteComplexQuery, id.trim());

module.exports = {
  getAllCompanies,
  getAllComplexes,
  addComplex,
  deleteComplex,
};
