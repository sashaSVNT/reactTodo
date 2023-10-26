import React, { SyntheticEvent, useState } from 'react';
import styles from './todoitem.css';

interface ITodoItemProps {
  text: string,
  isDone: boolean,
  onDelete: () => void,
  onDone: () => void,
}

const NOOP = () => {

}

export function TodoItem({ text, isDone, onDone = NOOP, onDelete = NOOP }: ITodoItemProps) {
  return (
    <li style={{display: "flex", cursor: "pointer"}}>
      <div onClick={onDone} style={isDone ? {textDecoration: "line-through"} : {textDecoration: "none"}} className={styles.inputAdd}>{text}</div>
      <button onClick={onDelete}>Удалить</button>
    </li>
  );
}
