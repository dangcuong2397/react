import TodoItem from './TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import AddTodo from './AddTodo';
import React from 'react';

const TodoList: React.FC = props => {
  const todoItems = useSelector((state: AppState) => state.todoModule.todos);

  return (
    <div>
      <div>{todoItems.length > 0 ? todoItems.map(item => <TodoItem key={item.id} item={item} />) : <p>No Todos added</p>}</div>
    </div>
  );
};

export default TodoList;
