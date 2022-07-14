export interface Todo {
    id: string;
    content: string;
    createdAt: Date;
    inEditMode: boolean;
    isEdited: boolean;
    onTodoRemove?: (id: string) => void;
    onEditEnter?: (id: string) => void;
    onTodoEdit?: (todo: Todo) => void;
}

export interface InputOptions {
    onTodoAdd?: (todo: Todo) => void;
}