export type Task = {
    id: string;
    title: string;
    userId: string;
    summary: string;
    dueDate: string;
}

export type AddTask = {
    title: string;
    summary: string;
    dueDate: string;
}