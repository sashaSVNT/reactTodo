import React from 'react';
import { TodoItem } from './TodoItem';
import { List } from 'antd';

interface IItem {
  item: string,
  _id: string,
  isDone: boolean
}

interface IListItemsProps {
  list: IItem[],
  onDeleteItem: (id: string) => void,
  onDoneItem: (id: string) => void
}

export function ListItems({ list, onDeleteItem, onDoneItem }: IListItemsProps) {
  return (
    <List
      bordered
      dataSource={list}
      renderItem={({ item: text, _id: id, isDone }) => 
        <TodoItem 
          key={id} 
          text={text} 
          onDelete={() => onDeleteItem(id)}
          isDone={isDone}
          onDone={() => onDoneItem(id)} 
        />
      }
    />
  );
}
