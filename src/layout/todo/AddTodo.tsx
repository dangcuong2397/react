import React, { ChangeEvent, useContext, useState } from 'react';
import { SocketContext } from '../../context/socket';

interface ITodoItem {
  id?: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean;
  expiresAt?: Date;
}
const AddTodo = () => {
  const [input, setInput] = useState('');
  const socket = useContext(SocketContext);
  function onSubmit() {
    const payload: ITodoItem = {
      id: new Date().getUTCMilliseconds(),
      name: input,
      createdAt: new Date(),
      updatedAt: new Date(),
      isCompleted: false,
    };
    socket.emit('ADD_TODO', payload);
    setInput('');
  }

  function onchange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <div>
      <input value={input} placeholder='Enter todo' onChange={onchange} />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};

export default AddTodo;
