import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todo/todo.actions';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  function onSubmit() {
    dispatch(addTodo(input));
    setInput('');
  }

  function onchange(e: any) {
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
