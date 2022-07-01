const select_complex = document.querySelector(".select_complex");
const select_rooms = document.querySelector(".select_rooms");

const renderRooms = (arr, place) => {
  place.innerHTML = null;
  let option1 = document.createElement("option");
  option1.value = "no";
  option1.textContent = "Choose";
  place.appendChild(option1);
  arr.forEach((e) => {
    const option = document.createElement("option");
    option.value = e.room_id;
    option.textContent = e.room_count;
    place.appendChild(option);
  });
};

select_complex.addEventListener("change", () => {
  let complex_id = select_complex.value;

  if (complex_id != "no") {
    fetch("http://localhost:9000/admin_room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complex_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => renderRooms(data, select_rooms));
  }
});
