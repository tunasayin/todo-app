export interface Todo {
    id: string;
    content: string;
    createdAt: Date;
    isEdited: boolean;
    onTodoRemove?: (id: string) => void;
}

export interface InputOptions {
    onTodoAdd?: (todo: Todo) => void;
}