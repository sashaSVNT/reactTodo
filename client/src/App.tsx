import React, { useEffect, useState } from "react";
import { Layout } from 'antd';
import { Content } from "antd/es/layout/layout";
import { ListItems } from "./components/ListItems";
import "./App.css";
import { FormAddItem } from "./components/FormAddItem";
import axios from "axios";

interface IitemsList {
  _id: string,
  item: string,
  isDone: boolean
}

export default function App() {
  const [itemsList, setItemsList] = useState<IitemsList[]>([]);

  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get('http://localhost:5500/api/items');
        setItemsList(res.data);
      }catch(err) {
        console.log(err);
      }
    } 
    getItemsList();
  }, [])

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(`http://localhost:5500/api/item/${id}`);
    }catch(err) {
      console.log(err);
    }
    setItemsList(itemsList.filter((item) => item._id !== id));
  }

  const handleDone = async (id: string) => {
    try {
      const currenItem = itemsList.filter((item) => item._id === id)[0];
      const res = await axios.put(`http://localhost:5500/api/item/${id}`, {
        item: currenItem.item,
        isDone: !currenItem.isDone
      });
    }catch(err) {
      console.log(err);
    }
    setItemsList(itemsList.map((item) => item._id === id ? {...item, isDone: !item.isDone} : item));
  }

  const addItem = async (itemText: string) => {
    try {
      const res = await axios.post('http://localhost:5500/api/item', {
        item: itemText,
        isDone: false
      });
      setItemsList(itemsList.concat(res.data))
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <Layout style={{
      minHeight: "100vh"
    }}>
      <Content style={{
        width: "30%",
        margin: "100px auto 0",
      }}>
        <FormAddItem addItem={addItem}/>
        <ListItems list={itemsList} onDoneItem={handleDone} onDeleteItem={handleDelete}/>
      </Content>
    </Layout>
  );
}