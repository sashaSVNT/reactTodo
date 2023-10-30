
import React, { SyntheticEvent, useRef, useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';

const NOOP = () => {

}

export function FormAddItem({ addItem = NOOP }) {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    if(value.length > 0) {
      addItem(value);
      setValue('');
    }
  }
  return (
    <View 
      style={styles.container} 
    >
      <View style={{width: "80%"}}>
        <TextInput
        style={styles.input} 
        placeholder='Create new task' 
        value={value} 
        onChangeText={text => setValue(text)}/>
      </View>
      <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonLabel}>Submit</Text>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex", 
    marginTop: 120, 
    flexDirection: "row", 
    width: "100%", 
    alignItems: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "transparent",
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: 'black',
    fontSize: 16,
  },
});
