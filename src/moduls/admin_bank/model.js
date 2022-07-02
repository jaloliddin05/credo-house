const { fetchData } = require("../../utils/pg");

const getBanksQuery = `select * from banks`;

const getBanks = () => fetchData(getBanksQuery);

const deleteBanksQuery = `delete from banks where bank_id = $1`;

const deleteBanks = (id) => fetchData(deleteBanksQuery, id.trim());

const addBankQuery = `insert into banks(bank_name,starting_payment_procent,bank_img,bank_money,credit_year) values ($1,$2,$3,$4, unnest(ARRAY[$5])::int[])`;

const addBank = (name, procent, img, money, year) =>
  fetchData(addBankQuery, name, procent, img, money, year);

module.exports = {
  getBanks,
  deleteBanks,
  addBank,
};
