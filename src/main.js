import "./style.css";
import { ToDoItem } from "./models/ListItems";
import { createListItemHTML } from "./functions";

const theList = document.createElement("ul");
theList.id = "the_list";
document.getElementById("app").appendChild(theList);

const item1 = new ToDoItem("Städa", "Plocka undan, dammtorka och dammsuga", "18:00 Fredag");
const item2 = new ToDoItem("Diska", "Diskberget måste bort", "19:00 varje kväll");
const item3 = new ToDoItem("Tänka igenom saker", "Reflektera över tankar och känslor som slagit till under dagen", "21:00 varje kväll");
const item4 = new ToDoItem("Plugga", "Hitta på ett eget projekt som använder Javascript och koda på!", "Tisdag om två veckor");

let toDoArray = [item1, item2, item3, item4];

theList.innerHTML = "";

for (let i = 0; i < toDoArray.length; i++) {

    const foundListItemName = createListItemHTML(toDoArray[i]);

    foundListItemName.addEventListener("click", () => {
        toDoArray.splice(i, 1);


    })
}