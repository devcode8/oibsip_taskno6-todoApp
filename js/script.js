const inputTask = document.querySelector("#taskAdd");
const addBtn = document.querySelector("#addtask");
const taskContainer = document.querySelector("#task-lists");

const deleteButton = document.querySelector(".delete");
const tasklistName = document.querySelector(".task");

taskContainer.innerHTML = "";

addBtn.addEventListener("click", () => {
  const task = inputTask.value;
  if (inputTask.value === "") {
    alert("Please enter a task");
  } else {
    const taskList = document.createElement("div");
    taskList.classList.add("task");
    taskContainer.appendChild(taskList);
    taskList.innerHTML = `
      <span class="taskName">${task}</span>
      <button class="done"><i class="fa-solid fa-check"></i></button>
      <button class="delete"><i class="fa-solid fa-trash"></i></button>
      `;
    inputTask.value = "";
  }
});
taskContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.remove();
    }else if(e.target.classList.contains('fa-check')){
        e.target.parentElement.parentElement.firstChild.nextElementSibling.classList.toggle('taskdone');
        console.log(e.target.parentElement.parentElement.firstChild.nextElementSibling);
    }
});
