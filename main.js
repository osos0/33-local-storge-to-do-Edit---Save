const addTaskEl = document.querySelector(".add-Task");
const medialTaskEl = document.querySelector(".medial-con");
const inputEl = document.querySelector(".input");
const btnEl = document.querySelector(".btn");
// console.log(btnEl);

addTaskEl.addEventListener("click", () => {
  taskCreation();
});

function taskCreation() {
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

    newEditEl.addEventListener("click", () => {
      newEditEl.innerHTML = `Edit`;
      // newTaskEl.innerHTML = newinputEl.value;
      // newinputEl.remove();
      // newinputEl.style.display = "none";
    });
  });

  // Delete Task
  newDeleteEl.addEventListener("click", () => {
    newTaskEl.remove();
  });

  // Delete All Task
  btnEl.addEventListener("click", () => {
    newTaskEl.remove();
  });
}
