export default class ToDo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    get getTitle() {
        return this.title;
    }

    get getDescription() {
        return this.description;
    }

    get getDueDate() {
        return this.dueDate;
    }

    get getPriority() {
        return this.priority;
    }

    get getNotes() {
        return this.notes;
    }
}