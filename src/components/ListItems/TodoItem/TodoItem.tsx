import React from 'react';
import styles from './todoitem.css';

interface ITodoItemProps {
  text: string,
  onDelete: () => void
}

const NOOP = () => {

}

export function TodoItem({ text, onDelete = NOOP }: ITodoItemProps) {
  return (
    <li>
      <input style={{background: "transparent", border: "0"}} type="text" value={text} disabled/>
      <button onClick={onDelete}>Удалить</button>
    </li>
  );
}
