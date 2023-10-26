import React from 'react';
import styles from './todoitem.css';

interface ITodoItem {
  text: string,
  onDelete: () => void
}

const NOOP = () => {

}

export function TodoItem({ text, onDelete = NOOP }: ITodoItem) {
  return (
    <li onClick={onDelete}>{text}</li>
  );
}
