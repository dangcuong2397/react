import React from 'react';
import { ITodoItem } from '../types';
import css from 'classnames';
import { addTodo, removeTodo, toggleCompleted } from '../../../redux/todo/todo.actions';
import { useDispatch } from 'react-redux';

interface TodoItemProps {
  item: ITodoItem;
}

const TodoItem: React.FC<TodoItemProps> = props => {
  const dispatch = useDispatch();
  function onToggleComplete(id: number) {
    dispatch(toggleCompleted(id));
  }
  function onDelete(id: number) {
    dispatch(removeTodo(id));
  }
  return (
    <div aria-disabled={props.item.isCompleted}>
      <div>
        <h3>{props.item.name}</h3>
        <span>{props.item.createdAt.toLocaleDateString()}</span>
      </div>

      <div>
        <button style={{ marginRight: 8 }} onClick={() => onToggleComplete(props.item.id)}>
          {props.item.isCompleted ? `Not Done` : `Done`}
        </button>
        <button style={{ marginRight: 8 }} onClick={() => onDelete(props.item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
