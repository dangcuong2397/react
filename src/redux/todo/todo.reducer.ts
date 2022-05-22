import { TodoState, TodoActionTypes, ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE, EDIT_TODO } from './action-types';

const initialState: TodoState = {
  todos: [],
};

export function todoReducer(state = initialState, action: TodoActionTypes): TodoState {
  switch (action.type) {
    case ADD_TODO: {
      const { name, expiresAt } = action.payload;
      const newTodos = [
        {
          name,
          expiresAt,
          createdAt: new Date(),
          updatedAt: new Date(),
          id: new Date().getUTCMilliseconds(),
          isCompleted: false,
        },
        ...state.todos,
      ];
      return { todos: newTodos };
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      const todoIndex = state.todos.findIndex(todo => todo.id === id);
      if (todoIndex !== -1) {
        const todos = [...state.todos];
        todos.splice(todoIndex, 1);
        return { todos };
      }
      return { ...state };
    }
    case TOGGLE_COMPLETE: {
      const { id } = action.payload;
      const todoIndex = state.todos.findIndex(todo => todo.id === id);
      if (todoIndex !== -1) {
        let todos = [...state.todos];
        const todoItem = todos[todoIndex];
        todoItem.isCompleted = !todoItem.isCompleted;
        todos.splice(todoIndex, 1);
        if (todoItem.isCompleted) {
          todos.push({ ...todoItem });
        } else {
          todos = [{ ...todoItem }, ...todos];
        }
        return { todos };
      }
      return { ...state };
    }
    case EDIT_TODO: {
      const { id } = action.payload;
      const todoIndex = state.todos.findIndex(todo => todo.id === id);
      if (todoIndex !== -1) {
        let todos = [...state.todos];
        todos.splice(todoIndex, 1);
        if (action.payload.isCompleted) {
          todos.push({ ...action.payload });
        } else {
          todos = [{ ...action.payload }, ...todos];
        }
        return { todos };
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
}
