import { Task } from "./models/Tasks";
import { createTaskListHTML, saveNewTask } from "./functions";

const theList = document.createElement("ul");
theList.id = "the_list";
document.getElementById("todo-container").appendChild(theList);

const allDoneList = document.createElement("ul");
allDoneList.id = "the_finished_list";
document.getElementById("done-container").appendChild(allDoneList);

const item1 = new Task("Städa", "Plocka undan, dammtorka och dammsuga", "18:00 fredag", false);
const item2 = new Task("Diska", "Diskberget måste bort", "19:00 varje kväll", false);
const item3 = new Task("Tänka igenom saker", "Reflektera över tankar och känslor som slagit till under dagen", "21:00 varje kväll", false);
const item4 = new Task("Plugga", "Hitta på ett eget projekt som använder Javascript och koda på!", "tisdag om två veckor", false);

let toDoArray = [];

const foundUserTasks = localStorage.getItem("user_tasks");
const foundUserTasksObjectified = JSON.parse(foundUserTasks);

if (foundUserTasksObjectified) {
    toDoArray = foundUserTasksObjectified;
}
else {
    toDoArray = [item1, item2, item3, item4];
}

createTaskListHTML(toDoArray, theList, allDoneList);

const nameContainer = document.getElementById("user-input-name");
const descContainer = document.getElementById("user-input-description");
const dlContainer = document.getElementById("user-input-deadline");

const saveBtn = document.getElementById("btn--save");
saveBtn.addEventListener("click", () => {
    saveNewTask(new Task(nameContainer.value, descContainer.value, dlContainer.value, false), toDoArray, theList, allDoneList);
    nameContainer.value = "";
    descContainer.value = "";
    dlContainer.value = "";
});





