import { ADD_TODO, TOGGLE_COMPLETE, REMOVE_TODO } from './action-types';

export function addTodo(name: string, expiresAt?: Date) {
  return {
    type: ADD_TODO,
    payload: { name, expiresAt, createdAt: new Date(), updatedAt: new Date(), isCompleted: false },
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
