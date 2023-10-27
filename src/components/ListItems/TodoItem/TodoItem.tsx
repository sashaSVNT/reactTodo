import { Button, List } from 'antd';
import React, { SyntheticEvent, useState } from 'react';

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
    <List.Item style={{display: "flex", cursor: "pointer"}}>
      <div onClick={onDone} style={ isDone ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{text}</div>
      <Button onClick={onDelete}>Удалить</Button>
    </List.Item>
  );
}
