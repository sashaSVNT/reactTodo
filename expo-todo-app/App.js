import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { ListItems } from './src/components/ListItems/ListItems';
import { FormAddItem } from './src/components/FormAddItem/FormAddItem';

export default function App() {
  const [itemsList, setItemsList] = useState([]);
  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get('http://10.0.2.2:5500/api/items');
        setItemsList(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getItemsList();
  }, [])
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://10.0.2.2:5500/api/item/${id}`);
    } catch (err) {
      console.log(err);
    }
    setItemsList(itemsList.filter((item) => item._id !== id));
  }

  const handleUpdate = async (item, id) => {
    try {
      const currenItem = itemsList.filter((item) => item._id === id)[0];
      const res = await axios.put(`http://localhost:5500/api/item/${id}`, {
        item: item,
        isDone: currenItem.isDone
      });
    } catch (err) {
      console.log(err);
    }
    setItemsList(itemsList.map((elem) => elem._id === id ? { ...elem, item: item } : elem));
  }

  const addItem = async (itemText) => {
    try {
      const res = await axios.post('http://10.0.2.2:5500/api/item', {
        item: itemText,
        isDone: false
      });
      setItemsList(itemsList.concat(res.data))
    } catch (err) {
      console.log(err);
    }
  }

  const handleDone = async (id) => {
    try {
      const currenItem = itemsList.filter((item) => item._id === id)[0];
      const res = await axios.put(`http://10.0.2.2:5500/api/item/${id}`, {
        item: currenItem.item,
        isDone: !currenItem.isDone
      });
    } catch (err) {
      console.log(err);
    }
    setItemsList(itemsList.map((item) => item._id === id ? { ...item, isDone: !item.isDone } : item));
  }

  return (
    <View style={styles.main}>
      <FormAddItem addItem={addItem} />
      <ListItems list={itemsList} onDeleteItem={handleDelete} onDoneItem={handleDone} onUpdateItem={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
