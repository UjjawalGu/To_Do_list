const title = document.querySelectorAll(".task");
const addbtnBox = document.querySelector(".addbtn-box");
const addbtn = document.querySelector(".plus");
const container = document.querySelector(".container");
const dialog = document.querySelector(".input-box");
const task = document.querySelectorAll(".task");
const taskContainer = document.querySelector(".task-container");
let dataArr = [];
const inputVal = document.querySelector(".input");
const savebtn = document.querySelector(".save");

const local = localStorage?.getItem("data");
if (JSON.parse(local)) {
  const data = JSON.parse(local);
  for (const el of data) {
    dataArr.push(el);
    render(el.id);
  }
}
// console.log(data);

addbtnBox.addEventListener("click", function () {
  addbtn.classList.toggle("addbtn");
  addbtnBox.classList.toggle("bg");
  container.classList.toggle("overlay");
  dialog.classList.toggle("display");
});
console.log(taskContainer);
const addTask = function (e) {
  if (inputVal.value === "") {
    alert("You must enter something");
  } else {
    const data = {
      id: Math.random(),
      list: inputVal.value,
      checked: false,
    };
    dataArr.push(data);
    inputVal.value = "";
    addbtn.classList.toggle("addbtn");
    addbtnBox.classList.toggle("bg");
    container.classList.toggle("overlay");
    dialog.classList.toggle("display");
    localStorage.setItem("data", JSON.stringify(dataArr));

    console.log(dataArr);
    render(data.id);
  }
};

function render(id) {
  dataArr.map((el) => {
    if (id === el.id) {
      let li = document.createElement("li");
      li.classList.add("task");
      console.log(li);
      li.textContent = el.list;
      taskContainer.appendChild(li);
      console.log(li);
      li.addEventListener("click", function () {
        li.classList.toggle("checked");
      });
    } else return;
  });
}
title.forEach((el) =>
  el.addEventListener("click", function () {
    el.classList.toggle("checked");
  })
);
const clearAll = function () {
  localStorage.clear("data");
  dataArr = [];
  taskContainer.innerHTML = "";
  console.dir(taskContainer);
  console.log(dataArr);
};

