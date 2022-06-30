const { fetchData } = require("../../utils/pg");

const getCompanyStatisticsQuery = `
select company_name, count(s.statistic_id) as company_count from companies c left join statistic s on c.company_id = s.company_id group by company_name
`;

const getCompanyStatistics = () => fetchData(getCompanyStatisticsQuery);

const getComplexStatisticsQuery = `
select complex_name, count(s.statistic_id) as complex_count from complexes c left join statistic s on c.complex_id = s.complex_id group by complex_name
`;

const getComplexStatistics = () => fetchData(getComplexStatisticsQuery);

const getRoomStatisticsQuery = `
select room_count, count(s.statistic_id) as room_number from rooms r left join statistic s on r.room_id = s.room_id group by room_count
`;

const getRoomStatistics = () => fetchData(getRoomStatisticsQuery);

const getBankStatisticsQuery = `
select bank_name, count(s.statistic_id) as bank_count from banks b left join statistic s on b.bank_id = s.bank_id group by bank_name
`;

const getBankStatistics = () => fetchData(getBankStatisticsQuery);

module.exports = {
  getCompanyStatistics,
  getComplexStatistics,
  getRoomStatistics,
  getBankStatistics,
};
