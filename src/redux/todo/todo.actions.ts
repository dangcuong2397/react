import { ADD_TODO, TOGGLE_COMPLETE, REMOVE_TODO, EDIT_TODO } from './action-types';

interface ITodoItem {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean;
  expiresAt?: Date;
}

export function addTodo(todo: ITodoItem) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function removeTodo(id: number) {
  return {
    type: REMOVE_TODO,
    payload: { id },
  };
}

export function toggleCompleted(id: number) {
  return {
    type: TOGGLE_COMPLETE,
    payload: { id },
  };
}
export function editTodo(todo: ITodoItem) {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
}
