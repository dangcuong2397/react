import React, { useContext, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { SocketContext } from '../../context/socket';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo, removeTodo } from '../../redux/todo/todo.actions';

interface ITodoItem {
  id?: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean;
  expiresAt?: Date;
}
export default function TodoMain() {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  console.log('vao');
  useEffect((): any => {
    socket.on('ADD_TODO', (todo: ITodoItem) => {
      dispatch(addTodo(todo));
    });
    socket.on('REMOVE_TODO', (id: number) => {
      dispatch(removeTodo(id));
    });
    socket.on('EDIT_TODO', (todo: ITodoItem) => {
      todo.createdAt = new Date(todo.createdAt);
      dispatch(editTodo(todo));
    });
    return () => {
      socket.off('ADD_TODO');
      socket.off('REMOVE_TODO');
      socket.off('EDIT_TODO');
    };
  }, []);
  return (
    <SocketContext.Provider value={socket}>
      <div className='todo-app'>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </SocketContext.Provider>
  );
}
