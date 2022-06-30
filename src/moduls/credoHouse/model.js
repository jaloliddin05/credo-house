const { fetchData } = require("../../utils/pg");

const getAllCompaniesQuery = `select * from companies`;
const getAllCompanies = () => fetchData(getAllCompaniesQuery);

const getComplexesOFCompanyQuery = `select * from complexes where company_id = $1`;
const getComplexesOFCompany = (id) => fetchData(getComplexesOFCompanyQuery, id);

const getRoomsOfComplexesQuery = `select * from rooms where complex_id = $1`;
const getRoomsOfComplexes = (id) => fetchData(getRoomsOfComplexesQuery, id);

const getNearestBankQuery = `select * from banks where bank_money > ($1::bigint * $2::bigint) order by bank_money LIMIT 1`;
const getNearestBank = (area, kv_price) =>
  fetchData(getNearestBankQuery, area, kv_price);

const getCurrentRoomQuery = `select * from rooms where room_id = $1`;
const getCurrentRoom = (id) => fetchData(getCurrentRoomQuery, id);

const getComplexByRoomQuery = `select * from complexes where complex_id = $1`;
const getComplexByRoom = (id) => fetchData(getComplexByRoomQuery, id);

const getBankByIdQuery = `select * from banks where bank_id = $1`;
const getBankById = (id) => fetchData(getBankByIdQuery, id);

const getRoomByIdQuery = `select (total_area::bigint * kv_metr_price::bigint * $1 / 100) as starting_payment,(total_area::bigint * kv_metr_price::bigint * ( 1 - $1 / 100) / (12 * $2)) as monthly_payment,(total_area::bigint * kv_metr_price::bigint) as house_price from rooms where room_id = $3`;
const getRoomById = (str_prc, year, id) =>
  fetchData(getRoomByIdQuery, str_prc, year, id);

const addToStatisticQuery = `insert into statistic(company_id,complex_id,room_id,bank_id) values ($1,$2,$3,$4)`;
const addToStatistic = (id_1, id_2, id_3, id_4) =>
  fetchData(addToStatisticQuery, id_1, id_2, id_3, id_4);

module.exports = {
  getAllCompanies,
  getComplexesOFCompany,
  getRoomsOfComplexes,
  getNearestBank,
  getCurrentRoom,
  getComplexByRoom,
  getBankById,
  getRoomById,
  addToStatistic,
};
