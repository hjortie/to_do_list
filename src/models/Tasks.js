export class Task {
    taskName;
    description;
    deadline;
    isFinished;

    constructor(taskName, description, deadline, isFinished) {
        this.taskName = taskName;
        this.description = description;
        this.deadline = deadline;
        this.isFinished = isFinished;
    }
}