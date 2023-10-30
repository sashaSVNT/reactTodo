import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { ListItems } from './src/components/ListItems/ListItems';
import { FormAddItem } from './src/components/FormAddItem/FormAddItem';

// const list = [
//   { item: 'lqelwqlqw', _id: '14225324', isDone: false },
//   { item: 'lqe123lwqlqw', _id: '142342312', isDone: false },
//   { item: '43243123', _id: '142421', isDone: false }
// ]


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
  const handleDelete = (id) => {
    setItemsList(itemsList.filter((item) => item._id !== id));
  }
  const addItem = (itemText) => {
    setItemsList(itemsList.concat({ item: itemText, _id: 'WDDasdw', isDone: false }))
  }
  const handleDone = (id) => {
    setItemsList(itemsList.map((item) => item._id === id ? { ...item, isDone: !item.isDone } : item));
  }
  return (
    <View style={styles.main}>
      <FormAddItem addItem={addItem} />
      <ListItems list={itemsList} onDeleteItem={handleDelete} onDoneItem={handleDone} />
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
