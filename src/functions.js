
export function createTaskListHTML(taskList) {
    document.getElementById("the_list").innerHTML = "";
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

        document.getElementById("the_list").appendChild(listItemName);
        listItemName.appendChild(listItemDescr);
        listItemDescr.appendChild(listItemDeadL);


        //const foundListItemName = createListItemHTML(toDoArray[i]);

        listItemName.addEventListener("click", () => {
            taskList.splice(i, 1);
            createTaskListHTML(taskList)
        })
    }
}

   // return listItemName;

