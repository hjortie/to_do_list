export class ToDoItem {
    taskName;
    description;
    deadline;

    constructor(taskName, description, deadline) {
        this.taskName = taskName;
        this.description = description;
        this.deadline = deadline;
    }
}