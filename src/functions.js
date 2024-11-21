import { Task } from "./models/Tasks";

export function createTaskListHTML(taskList, listContainer, finishedTasks) {
    listContainer.innerHTML = "";
    finishedTasks.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        const checker = document.createElement("input")
        const listItemName = document.createElement("li");
        const listItemDescr = document.createElement("p");
        const listItemDeadL = document.createElement("p");

        checker.type = "checkbox";
        checker.className = "check-input";
        checker.checked = taskList[i].isFinished;
        listItemName.innerHTML = taskList[i].taskName;
        listItemName.className = "task-name";
        listItemDescr.innerHTML = taskList[i].description;
        listItemDescr.className = "task-description";
        listItemDeadL.innerHTML = "Ska vara klart senast " + taskList[i].deadline;
        listItemDeadL.className = "task-deadline";

        listItemName.appendChild(checker);
        listContainer.appendChild(listItemName);
        listItemName.appendChild(listItemDescr);
        listItemName.appendChild(listItemDeadL);

        if (taskList[i].isFinished === true) {
            finishedTasks.appendChild(listItemName);
            listItemName.className = "finished-tasks";

            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Ta bort";
            deleteBtn.className = "delete-btn";
            finishedTasks.appendChild(deleteBtn);

            deleteBtn.addEventListener("click", () => {
                taskList.splice(i, 1);
                localStorage.setItem("user_tasks", JSON.stringify(taskList));
                createTaskListHTML(taskList, listContainer, finishedTasks)
            });
        }

        else {
            listItemName.className = "task-name";
            listContainer.appendChild(listItemName);
        }

        checker.addEventListener("change", () => {
            if (checker.checked) {
                taskList[i].isFinished = true;
                //const finishedTask = listItemName.parentNode.removeChild(listItemName);
                //finishedTask.className = "finished-tasks";
                localStorage.setItem("user_tasks", JSON.stringify(taskList));
                //finishedTasks.appendChild(listItemName);
                createTaskListHTML(taskList, listContainer, finishedTasks);
            }
            else {
                taskList[i].isFinished = false;
                listItemName.className = "task-name";
                listContainer.appendChild(listItemName);
                localStorage.setItem("user_tasks", JSON.stringify(taskList));
            }
        })


    }
    const sortBtn = document.createElement("button");
    sortBtn.innerHTML = "Sortera";
    listContainer.appendChild(sortBtn);

    sortBtn.addEventListener("click", () => {
        taskList.sort((a, b) => a.taskName.localeCompare(b.taskName));
        createTaskListHTML(taskList, listContainer, finishedTasks);
    })
}

export function saveNewTask(nameContainer, descContainer, dlContainer, taskList, listContainer, finishedTasks) {
    const newItemName = nameContainer.value;
    const newItemDesc = descContainer.value;
    const newItemDL = dlContainer.value;

    let userTask = new Task(newItemName, newItemDesc, newItemDL, false);
    taskList.push(userTask);
    localStorage.setItem("user_tasks", JSON.stringify(taskList));
    createTaskListHTML(taskList, listContainer, finishedTasks);
}

export function sortTasks(taskList, listContainer, finishedTasks) {
    taskList.sort((a, b) => a.taskName.localeCompare(b.taskName));
    createTaskListHTML(taskList, listContainer, finishedTasks);
}

// function deleteTask(taskList, listContainer, finishedTasks) {
//     taskList.splice(i, 1);
//     localStorage.setItem("user_tasks", JSON.stringify(taskList));
//     createTaskListHTML(taskList, listContainer, finishedTasks)
// }