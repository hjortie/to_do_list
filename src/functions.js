
export function createListItemHTML(ToDoItem) {

    const listItemName = document.createElement("li");
    const listItemDescr = document.createElement("p");
    const listItemDeadL = document.createElement("p");

    listItemName.innerHTML = ToDoItem.taskName;
    listItemName.className = "task-name";
    listItemDescr.innerHTML = ToDoItem.description;
    listItemDescr.className = "task-description";
    listItemDeadL.innerHTML = "Ska vara klart senast " + ToDoItem.deadline;
    listItemDeadL.className = "task-deadline";

    document.getElementById("the_list").appendChild(listItemName);
    listItemName.appendChild(listItemDescr);
    listItemDescr.appendChild(listItemDeadL);

    return listItemName;
}
