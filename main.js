const addTaskEl = document.querySelector(".add-Task");
const medialTaskEl = document.querySelector(".medial-con");
const inputEl = document.querySelector(".input");
const btnEl = document.querySelector(".btn");
// const fixDivEl = document.querySelector(.fix-Div)
// console.log(btnEl);

// 22222 Second step to convert data with JSon
let missions = JSON.parse(localStorage.getItem("task2023"));
// 4444 loop for Each task we added to creat Every task from localStorage
missions.forEach((mis) => {
  taskCreation(mis);
});

addTaskEl.addEventListener("click", () => {
  taskCreation();
  updateLocalStorage();
});

// 4444 we shoud to put the parameter name like in the localStorage
function taskCreation(missions) {
  //5555 if the tasks exist .. will do that (inputEl.value === task name)
  if (missions) {
    inputEl.value = missions.name;
  }
  // creat Task
  const newTaskEl = document.createElement("div");
  newTaskEl.classList.add("createdTask");
  medialTaskEl.appendChild(newTaskEl);
  newTaskEl.innerHTML = inputEl.value;
  const newEditEl = document.createElement("div");
  newEditEl.classList.add("edit");
  newEditEl.innerHTML = `Edit`;
  newTaskEl.append(newEditEl);
  const newDeleteEl = document.createElement("div");
  newDeleteEl.classList.add("delete");
  newDeleteEl.innerHTML = `Delete`;
  newTaskEl.append(newDeleteEl);
  inputEl.value = ``;

  // Edit Task
  newEditEl.addEventListener("click", () => {
    newEditEl.innerHTML = `Save`;
    const newinputEl = document.createElement("input");
    newinputEl.value = newTaskEl.innerText.slice(
      0,
      newinputEl.value.length - 11
    );
    newinputEl.classList.add("input-task");
    newTaskEl.appendChild(newinputEl);
    newinputEl.focus();
    updateLocalStorage();

    // Save Task
    newEditEl.addEventListener("click", () => {
      newEditEl.innerHTML = `Edit`;
      newTaskEl.innerHTML = newinputEl.value;
      // newTaskEl.append(newEditEl);
      newTaskEl.append(newDeleteEl);
      updateLocalStorage();
    });
  });

  // Delete Task
  newDeleteEl.addEventListener("click", () => {
    newTaskEl.remove();
    // put this line to active delete task in the localstorage
    updateLocalStorage();
  });

  // Delete All Task
  btnEl.addEventListener("click", () => {
    newTaskEl.remove();
    // put this line to active delete Alltask in the localstorage
    updateLocalStorage();
  });
}
//11111 First Step to the value in array in local storage
function updateLocalStorage() {
  const AllnewTaskEl = document.querySelectorAll(".createdTask");
  let TaskArray = [];
  AllnewTaskEl.forEach((mission) => {
    TaskArray.push({
      name: mission.innerText.slice(0, mission.innerText.length - 12),
    });
  });
  localStorage.setItem("task2023", JSON.stringify(TaskArray));
}
