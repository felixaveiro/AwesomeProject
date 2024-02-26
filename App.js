import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [name, setName] = useState('aveiro');
  const [session, setSession] = useState({ number: 6, title: 'state' });
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName('Programming with aveiro');
    setSession({ number: 10, title: 'React Native' });
    setCurrent(!current);
  }

  const [Items, setItems] = useState([
    { key: 1, item: 'item 1' },
    { key: 2, item: 'item 2' },
    { key: 3, item: 'item 3' },
    { key: 4, item: 'item 4' },
    { key: 5, item: 'item 5' },
    { key: 6, item: 'item 6' },
    { key: 7, item: 'item 7' },
    { key: 8, item: 'item 8' },
  ]);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>My name is: {name}</Text>
      <Text style={styles.text}>This is session number: {session.number} and about {session.title}</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title='update state' onPress={onClickHandler}></Button>
      {Items.map((item) => (
        <View style={styles.item} key={item.key}>
          <Text style={styles.text}>{item.item}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#4ae1fa',
    padding: 10,
    margin: 5,
  }
});

export default App;
