const admin_room = require("./model");

module.exports = {
  GET: async (req, res) => {
    const complex = await admin_room.getAllComplexes();
    res.render("admin_room", { complex });
  },
  POST: async (req, res) => {
    const {
      complex_id_add,
      room_id,
      complex_id_del,
      room_area,
      room_count,
      room_price,
      input_room,
    } = req.body;
    if (complex_id_del) {
      const rooms = await admin_room.getRoomByComplexId(complex_id_del);
      console.log(rooms);
      res.send(rooms);
    } else if (room_id) {
      const deletedRoom = await admin_room.deleteRoom(room_id);
      res.send("ok");
    } else if (complex_id_add && room_area && room_count && room_price) {
      const addRoom = admin_room.addRoom(
        room_count,
        room_area,
        room_price,
        complex_id_add
      );
      res.redirect("/admin_room");
    } else if (input_room) {
    }
  },
};
