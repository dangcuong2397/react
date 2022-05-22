import React, { useContext } from 'react';
import { SocketContext } from '../../context/socket';

interface ITodoItem {
  name: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean;
  expiresAt?: Date;
}
interface TodoItemProps {
  item: ITodoItem;
}

const TodoItem: React.FC<TodoItemProps> = props => {
  const socket = useContext(SocketContext);
  function onToggleComplete(id: number) {
    socket.emit('EDIT_TODO', { ...props.item, isCompleted: !props.item.isCompleted });
  }
  function onDelete(id: number) {
    socket.emit('REMOVE_TODO', id);
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
