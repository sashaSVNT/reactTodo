import React from 'react';
import styles from './todoitem.css';

interface ITodoItem {
  text: string
}

export function TodoItem({ text }: ITodoItem) {
  return (
    <li>{text}</li>
  );
}
