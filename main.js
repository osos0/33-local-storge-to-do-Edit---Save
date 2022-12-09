const addTaskEl = document.querySelector(".add-Task");
const medialTaskEl = document.querySelector(".medial-con");
const inputEl = document.querySelector(".input");
// console.log(addTaskEl);

addTaskEl.addEventListener("click", () => {
  taskCreation();
});

function taskCreation() {
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
}
