import React from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from './components/Layout';
import { ListItems } from './components/ListItems';

const itemsContainer = [
  {text: 'Помыть посуду', id: "12"},
  {text: 'Убраться в комнате', id: "15"},
  {text: 'Почистить зубы', id: "25"},
]


function App() {
  return (
    <Layout>
      <ListItems list={itemsContainer}/>
    </Layout>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(<App />);