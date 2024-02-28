import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScreenA({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate('ScreenB');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      
      <Pressable onPress={onPressHandler} style={({ pressed }) => ({ backgroundColor: pressed ? 'blue' : 'grey' })}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
}

function ScreenB({ navigation }) {
  const onPressHandler = () => {
    navigation.goBack();
  };
  
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable onPress={onPressHandler} style={({ pressed }) => ({ backgroundColor: pressed ? 'blue' : 'grey' })}>
        <Text style={styles.text}>Go back to Screen A</Text>
      </Pressable>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
