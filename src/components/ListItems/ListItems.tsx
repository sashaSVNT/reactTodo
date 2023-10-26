import React from 'react';
import styles from './listitems.css';
import { TodoItem } from './TodoItem';

interface IItem {
  text: string,
  id: string,
}

interface IListItemsProps {
  list: IItem[],
  onDeleteItem: (id: string) => void
}

export function ListItems({ list, onDeleteItem }: IListItemsProps) {
  return (
    <ul className="listContainer">
      {list.map(({ text, id }) => <TodoItem key={id} text={text} onDelete={() => onDeleteItem(id)}/>)}
    </ul>
  );
}
