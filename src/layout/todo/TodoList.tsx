import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import React from 'react';

const TodoList: React.FC = () => {
  const todoItems = useSelector((state: AppState) => state.todoModule.todos);

  return (
    <div>
      <div>{todoItems.length > 0 ? todoItems.map(item => <TodoItem key={item.id} item={item} />) : <p>No Todos added</p>}</div>
    </div>
  );
};

export default TodoList;
