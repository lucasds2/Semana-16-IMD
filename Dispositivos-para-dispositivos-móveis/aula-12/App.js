import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaPosts from './ListaPosts';
import DetalhesPost from './DetalhesPost';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaPosts">
        <Stack.Screen name="ListaPosts" component={ListaPosts} />
        <Stack.Screen name="DetalhesPost" component={DetalhesPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
