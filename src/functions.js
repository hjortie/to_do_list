import { Task } from "./models/Tasks";

export function createTaskListHTML(taskList, listContainer, finishedTasks) {
    listContainer.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        const checker = document.createElement("input")
        const listItemName = document.createElement("li");
        const listItemDescr = document.createElement("p");
        const listItemDeadL = document.createElement("p");

        checker.type = "checkbox";
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


        checker.addEventListener("change", () => {
            taskList[i].isFinished = checker.checked;
            const finishedTask = listItemName.parentNode.removeChild(listItemName);
            finishedTask.className = "finished-tasks";

            if (taskList[i].isFinished === true) {
                finishedTasks.appendChild(listItemName);
            }
            else {
                listItemName.className = "task-name";
                listContainer.appendChild(listItemName);
            }
        })
    }
}

export function saveNewTask(nameContainer, descContainer, dlContainer, taskList, listContainer, finishedTasks) {
    const newItemName = nameContainer.value;
    const newItemDesc = descContainer.value;
    const newItemDL = dlContainer.value;

    let userTask = new Task(newItemName, newItemDesc, newItemDL, false);
    taskList.push(userTask);
    createTaskListHTML(taskList, listContainer, finishedTasks);
}

export function sortFunction(taskList, listContainer, finishedTasks) {
    taskList.sort((a, b) => a.taskName.localeCompare(b.taskName));
    createTaskListHTML(taskList, listContainer, finishedTasks);
}