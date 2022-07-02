const select_complex = document.querySelector(".select_complex");
const select_rooms = document.querySelector(".select_room");
const btn_delete = document.querySelector(".btn_delete");

const control_btn = document.querySelectorAll(".control_btn");
const overlay = document.querySelector(".overlay");
const count_input = document.querySelector(".count_input");
const select_complex_add = document.querySelector(".select_complex_add");

control_btn[0].classList.add("bg-warning");

for (let i = 0; i < control_btn.length; i++) {
  control_btn[i].addEventListener("click", () => {
    for (let i = 0; i < control_btn.length; i++) {
      control_btn[i].classList.remove("bg-warning");
    }
    control_btn[i].classList.add("bg-warning");
    if (i == 1) {
      overlay.style.top = "80px";
    } else {
      overlay.style.top = "420px";
    }
  });
}

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
  let complex_id_del = select_complex.value;

  if (complex_id_del != "no") {
    fetch("http://localhost:9000/admin_room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complex_id_del,
      }),
    })
      .then((res) => res.json())
      .then((data) => renderRooms(data, select_rooms));
  }
});

btn_delete.addEventListener("click", () => {
  let room_id = select_rooms.value;

  if (room_id != "no") {
    fetch("http://localhost:9000/admin_room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        room_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        select_rooms.innerHTML = null;
      });
  }
});
