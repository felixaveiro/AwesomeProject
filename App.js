import React,{useState} from'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,   Button } from 'react-native';


  const App = () => {
  const [name, setName] = useState('aveiro');
  const [session, setSession] = useState({number : 6, title : 'state'});
  const[current, setCurrent] = useState(true);
  const onClickHandler = () => {
    setName('Programming with aveiro');
    setSession({number : 10, title : 'React Native'});
    setCurrent(!current);
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>My name is :{name}</Text>
      <Text style={styles.text}>this is session number :{session.number} and about {session.title}</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title='update state ' onPress={onClickHandler}></Button>
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
  }
});
export default App;