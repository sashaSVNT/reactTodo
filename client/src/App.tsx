import React, { useState } from "react";
import { Layout } from 'antd';
import { Content } from "antd/es/layout/layout";
import { ListItems } from "./components/ListItems";
import "./App.css";
import { FormAddItem } from "./components/FormAddItem";

const itemsContainer = [
  {text: 'Помыть посуду', id: "12", isDone: false},
  {text: 'Убраться в комнате', id: "15", isDone: false},
  {text: 'Почистить зубы', id: "25", isDone: false},
]

function generateId() {
  return Math.random().toString(32).substring(2, 16);
}

export default function App() {
  const [itemsList, setItemsList] = useState(itemsContainer);

  const handleDelete = (id: string) => {
    setItemsList(itemsList.filter(item => item.id !== id));
  }

  const handleDone = (id: string) => {
    setItemsList(itemsList.map((item) => item.id === id ? {...item, isDone: !item.isDone} : item));
  }

  const addItem = (text: string) => {
    setItemsList(itemsList.concat({text: text, id: generateId(), isDone: false}))
  }

  return (
    <Layout style={{
      minHeight: "100vh"
    }}>
      <Content style={{
        width: "40%",
        margin: "100px auto 0",
      }}>
        <FormAddItem addItem={addItem}/>
        <ListItems list={itemsList} onDoneItem={handleDone} onDeleteItem={handleDelete}/>
      </Content>
    </Layout>
  );
}