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
            deleteBtn.className = "btn--delete";
            listItemName.appendChild(deleteBtn);

            deleteBtn.addEventListener("click", () => {
                taskList.splice(i, 1);
                localStorage.setItem("user_tasks", JSON.stringify(taskList));
                createTaskListHTML(taskList, listContainer, finishedTasks);
            });
        }

        checker.addEventListener("change", () => {
            taskList[i].isFinished = checker.checked;
            localStorage.setItem("user_tasks", JSON.stringify(taskList));
            createTaskListHTML(taskList, listContainer, finishedTasks);
        })
    }
    const sortBtn = document.createElement("button");
    sortBtn.id = "btn--sort";
    sortBtn.innerHTML = "Sortera A-Ö";
    listContainer.appendChild(sortBtn);

    sortBtn.addEventListener("click", () => {
        taskList.sort((a, b) => a.taskName.localeCompare(b.taskName));
        createTaskListHTML(taskList, listContainer, finishedTasks);
    })
}

export function saveNewTask(userTask, taskList, listContainer, finishedTasks) {
    taskList.push(userTask);
    localStorage.setItem("user_tasks", JSON.stringify(taskList));
    createTaskListHTML(taskList, listContainer, finishedTasks);
}

