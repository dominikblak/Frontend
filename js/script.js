{
  const tasks = [
    {
      content: "nagrać lekcję",
      done: false,
    },
    {
      content: "zjeść pierogi",
      done: true,
    },
  ];
  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };
  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };
  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };
  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
    const toogleDoneButtons = document.querySelectorAll(".js-done");
    toogleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };
  const render = () => {
    let htmlString = "";
    for (const task of tasks) {
      htmlString += `<li class="tasks__list"}>
      <button class="task__button js-done">${task.done ? "&#10004" : ""}</button>
      <span class="task__content" ${task.done ? "task__content--done" : ""}>
      ${task.content}</span>
      <button class=" task__button  task__button--remove js-remove">&#128465</button>
      </li>`;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;
    bindEvents();
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    if (newTaskContent === "") {
      return;
    }
    addNewTask(newTaskContent);
  };
  const init = () => {
    render();
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
  };
  init();
}
