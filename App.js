import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import MyFoodListScreen from './src/screens/my-food-list';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lista de alimentos"
          component={MyFoodListScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
