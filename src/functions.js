
export function createTaskListHTML(taskList, listContainer) {
    listContainer.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {

        const listItemName = document.createElement("li");
        const listItemDescr = document.createElement("p");
        const listItemDeadL = document.createElement("p");

        listItemName.innerHTML = taskList[i].taskName;
        listItemName.className = "task-name";
        listItemDescr.innerHTML = taskList[i].description;
        listItemDescr.className = "task-description";
        listItemDeadL.innerHTML = "Ska vara klart senast " + taskList[i].deadline;
        listItemDeadL.className = "task-deadline";

        listContainer.appendChild(listItemName);
        listItemName.appendChild(listItemDescr);
        listItemName.appendChild(listItemDeadL);


        //const foundListItemName = createListItemHTML(toDoArray[i]);

        listItemName.addEventListener("click", () => {
            taskList.splice(i, 1);
            createTaskListHTML(taskList, listContainer)
        })

    }
}
   // return listItemName;
