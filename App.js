import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    if(task != null) {
      setTaskItems([...taskItems, task])
      setTask(null)
    }
  }

  const completeTask = (index) => {
    const items = [...taskItems]
    items.splice(index, 1)
    setTaskItems(items)
  }

  return (
    <View style={styles.container}>
        <View style={styles.tasksWrapper}>

          <Text style={styles.sectionTitle}>My ToDo List</Text>

          <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                 return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                 )
              })
            }
          </View>

        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS == "android" ? "height" : "padding"}
          style={styles.writeTaskWrapper}>

          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />

          <TouchableOpacity onPress={handleAddTask}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>

        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
  },
  tasksWrapper: {
    marginTop: 40,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  input: {
    paddingVertical: 10,
    width: 230,
    paddingHorizontal: 15,
    borderRadius: 60,
    backgroundColor: '#FFF',
    borderColor: '#55BCFF',
    borderWidth: 1
  },
  addWrapper: {
    width: 47,
    height: 47,
    backgroundColor: '#FFF',
    borderColor: '#55BCFF',
    borderWidth: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addText: {
  }
});

