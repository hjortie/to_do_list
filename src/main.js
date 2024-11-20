import "./style.css";
import { Task } from "./models/Tasks";
import { createTaskListHTML } from "./functions";

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

let toDoArray = [item1, item2, item3, item4];

createTaskListHTML(toDoArray, theList, allDoneList);




