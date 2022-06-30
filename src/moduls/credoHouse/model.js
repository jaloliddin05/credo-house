const { fetchData } = require("../../utils/pg");

const getAllCompaniesQuery = `select * from companies`;

const getComplexesOFCompanyQuery = `select * from complexes where company_id = $1`;

const getRoomsOfComplexesQuery = `select * from rooms where complex_id = $1`;

const getNearestBankQuery = `select * from banks where bank_money > ($1::bigint * $2::bigint) order by bank_money LIMIT 1`;

const getCurrentRoomQuery = `select * from rooms where room_id = $1`;

const getComplexByRoomQuery = `select * from complexes where complex_id = $1`;

const getBankByIdQuery = `select * from banks where bank_id = $1`;

const getRoomByIdQuery = `select (total_area::bigint * kv_metr_price::bigint * $1 / 100) as starting_payment,(total_area::bigint * kv_metr_price::bigint * ( 1 - $1 / 100) / (12 * $2)) as monthly_payment,(total_area::bigint * kv_metr_price::bigint) as house_price from rooms where room_id = $3`;

const getAllCompanies = () => fetchData(getAllCompaniesQuery);

const getComplexesOFCompany = (id) => fetchData(getComplexesOFCompanyQuery, id);

const getRoomsOfComplexes = (id) => fetchData(getRoomsOfComplexesQuery, id);

const getNearestBank = (area, kv_price) =>
  fetchData(getNearestBankQuery, area, kv_price);
const getCurrentRoom = (id) => fetchData(getCurrentRoomQuery, id);

const getComplexByRoom = (id) => fetchData(getComplexByRoomQuery, id);

const getBankById = (id) => fetchData(getBankByIdQuery, id);
const getRoomById = (str_prc, year, id) =>
  fetchData(getRoomByIdQuery, str_prc, year, id);

module.exports = {
  getAllCompanies,
  getComplexesOFCompany,
  getRoomsOfComplexes,
  getNearestBank,
  getCurrentRoom,
  getComplexByRoom,
  getBankById,
  getRoomById,
};
