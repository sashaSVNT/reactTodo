import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from './components/Layout';
import { ListItems } from './components/ListItems';
import "./main.global.css";
import { FormAddItem } from './components/FormAddItem';

const itemsContainer = [
  {text: 'Помыть посуду', id: "12", isDone: false},
  {text: 'Убраться в комнате', id: "15", isDone: false},
  {text: 'Почистить зубы', id: "25", isDone: false},
]


function generateId() {
  return Math.random().toString(32).substring(2, 16);
}

function App() {
  const [itemsList, setItemsList] = useState(itemsContainer);

  const handleDelete = (id: string) => {
    setItemsList(itemsList.filter(item => item.id !== id));
  }

  const handleDone = (id: string) => {
    console.log(id);
    setItemsList(itemsList.map((item) => item.id === id ? {...item, isDone: !item.isDone} : item));
  }

  const addItem = (text: string) => {
    setItemsList(itemsList.concat({text: text, id: generateId(), isDone: false}))
  }
 
  return (
    <Layout>
      <FormAddItem addItem={addItem}/>
      <ListItems list={itemsList} onDoneItem={handleDone} onDeleteItem={handleDelete}/>
    </Layout>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(<App />);