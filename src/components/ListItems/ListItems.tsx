import React from 'react';
import styles from './listitems.css';
import { TodoItem } from './TodoItem';

interface IItem {
  text: string,
  id: string,
  isDone: boolean
}

interface IListItemsProps {
  list: IItem[],
  onDeleteItem: (id: string) => void,
  onDoneItem: (id: string) => void
}

export function ListItems({ list, onDeleteItem, onDoneItem }: IListItemsProps) {
  return (
    <ul className="listContainer">
      {list.map(({ text, id, isDone }) => <TodoItem 
        key={id} 
        text={text} 
        isDone={isDone} 
        onDone={() => onDoneItem(id)} 
        onDelete={() => onDeleteItem(id)}
        />)
      }
    </ul>
  );
}
