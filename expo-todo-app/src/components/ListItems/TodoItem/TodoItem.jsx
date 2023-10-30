
import React, { SyntheticEvent, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const NOOP = () => {

}

export function TodoItem({ item, isDone, onDone, onDelete, onUpdate }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [inputValue, setInputValue] = useState(item);

  const handleUpdate = () => {
    setIsUpdating(false);
    onUpdate(inputValue);
  }

  return (
    <View style={styles.container}>
      {
        isUpdating ? 
        <View style={{display: 'flex'}}>
          <View style={{width: "80%"}}>
            <TextInput
            style={styles.input} 
            value={value} 
            onChangeText={text => setInputValue(text)}/>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handleUpdate}>
              <Text style={styles.buttonLabel}>Submit</Text>
            </Pressable>
          </View>
        </View> : 
        <>
          <TouchableOpacity onPress={onDone} style={styles.item}>
            <Text style={[styles.text, isDone ? styles.done : styles.notDone]}>{item}</Text>
          </TouchableOpacity>
          <View style={{display: "flex", flexDirection: "row", padding: 20}}>
            <TouchableOpacity onPress={() => setIsUpdating(true)} style={[styles.button, {marginRight: 5, backgroundColor: 'yellow'}]}>
              <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete} style={[styles.button, {backgroundColor: 'red'}]}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    borderBottomWidth: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },  
  item: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "black"
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  text: {
    
  },
  done: {
    textDecorationLine: 'line-through'
  },
  notDone: {
    textDecorationLine: 'none'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
