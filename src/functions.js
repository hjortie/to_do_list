
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


        listItemName.addEventListener("click", () => {
            taskList[i].isFinished = checker.checked;
            const finishedTask = listItemName.parentNode.removeChild(listItemName);
            // createTaskListHTML(taskList, listContainer);
            // finishedTasks.appendChild(finishedTask);
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
    const listHead = document.getElementById("list-header");

    if (taskList.length === 0) {
        listHead.innerHTML = "OMG alla saker är klara!";
    }
}