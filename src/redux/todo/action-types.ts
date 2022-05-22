export interface ITodo {
  name: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean;
  expiresAt?: Date;
}
export interface TodoState {
  todos: ITodo[];
}
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const EDIT_TODO = 'EDIT_TODO';
interface AddTodo {
  type: typeof ADD_TODO;
  payload: {
    name: string;
    expiresAt?: Date;
  };
}
interface RemoveTodo {
  type: typeof REMOVE_TODO;
  payload: {
    id: number;
  };
}
interface ToggleComplete {
  type: typeof TOGGLE_COMPLETE;
  payload: {
    id: number;
  };
}
interface EditTodo {
  type: typeof EDIT_TODO;
  payload: ITodo;
}
export type TodoActionTypes = AddTodo | RemoveTodo | ToggleComplete | EditTodo;
