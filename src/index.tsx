import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from './components/Layout';
import { ListItems } from './components/ListItems';
import "./main.global.css";
import { FormAddItem } from './components/FormAddItem';

const itemsContainer = [
  {text: 'Помыть посуду', id: "12"},
  {text: 'Убраться в комнате', id: "15"},
  {text: 'Почистить зубы', id: "25"},
]


function generateId() {
  return Math.random().toString(32).substring(2, 16);
}

function App() {
  const [itemsList, setItemsList] = useState(itemsContainer);

  const handleDelete = (id: string) => {
    setItemsList(itemsList.filter(item => item.id !== id));
  }

  const addItem = (text: string) => {
    setItemsList(itemsList.concat({text: text, id: generateId()}))
  }
 
  return (
    <Layout>
      <FormAddItem addItem={addItem}/>
      <ListItems list={itemsList} onDeleteItem={handleDelete}/>
    </Layout>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(<App />);