import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native'; // Import Alert from react-native
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      Alert.alert('Warning', 'Name should be more than 3 characters', [ // Use Alert.alert instead of Alert
        { text: 'OK' }
      ]);
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        // onChange={(value) => setName(value)} // Remove this line, as it's not needed
        editable={!submitted}
      />
      <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        disabled={submitted}
      />
      {submitted && <Text style={styles.text}>You are registered as: {name}</Text>}
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
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  }
});

export default App;
