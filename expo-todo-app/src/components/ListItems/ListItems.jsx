import React from 'react';
import { TodoItem } from './TodoItem';
import { List } from 'antd';
import { FlatList, View, StyleSheet } from 'react-native';


export function ListItems({ list, onDeleteItem, onDoneItem, onUpdateItem }) {
  return (
    <View style={{width: "90%"}}>
      <FlatList
        style={styles.container}
        data={list}
        renderItem={({ item }) => (
          <TodoItem
            item={item.item}
            onDelete={() => onDeleteItem(item._id)}
            onDone={() => onDoneItem(item._id)}
            isDone={item.isDone}
            onUpdate={(text) => onUpdateItem(text, item._id)}
          />
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    borderWidth: 2,
    borderRadius: 6,
  }
});