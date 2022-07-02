const { fetchData } = require("../../utils/pg");

const getAllComplexesQuery = `select * from complexes`;

const getAllComplexes = () => fetchData(getAllComplexesQuery);

const getRoomByComplexIdQuery = `select * from rooms where complex_id = $1`;

const getRoomByComplexId = (id) =>
  fetchData(getRoomByComplexIdQuery, id.trim());

const deleteRoomQuery = `delete from rooms where room_id = $1`;

const deleteRoom = (id) => fetchData(deleteRoomQuery, id.trim());

const addRoomQuery = `call add_room($1,$2,$3,$4)`;

const addRoom = (r_c, r_a, r_p, c_i) =>
  fetchData(addRoomQuery, r_c, r_a, r_p, c_i.trim());

module.exports = {
  getAllComplexes,
  getRoomByComplexId,
  deleteRoom,
  addRoom,
};
