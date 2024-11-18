import "./style.css";
import { Task } from "./models/Tasks";
import { createTaskListHTML } from "./functions";

const theList = document.createElement("ul");
theList.id = "the_list";
document.getElementById("app").appendChild(theList);

const item1 = new Task("Städa", "Plocka undan, dammtorka och dammsuga", "18:00 fredag");
const item2 = new Task("Diska", "Diskberget måste bort", "19:00 varje kväll");
const item3 = new Task("Tänka igenom saker", "Reflektera över tankar och känslor som slagit till under dagen", "21:00 varje kväll");
const item4 = new Task("Plugga", "Hitta på ett eget projekt som använder Javascript och koda på!", "tisdag om två veckor");

let toDoArray = [item1, item2, item3, item4];

createTaskListHTML(toDoArray);


console.log(toDoArray)