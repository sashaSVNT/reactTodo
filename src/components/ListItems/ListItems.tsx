import React from 'react';
import styles from './listitems.css';
import { TodoItem } from './TodoItem';

interface IItem {
  text: string,
  id: string
}

interface IListItemsProps {
  list: IItem[]
}

export function ListItems({ list }: IListItemsProps) {
  return (
    <ul className="listContainer">
      {list.map(({ text, id }) => <TodoItem key={id} text={text}/>)}
    </ul>
  );
}
