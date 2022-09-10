import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import MyFoodListScreen from './src/screens/my-food-list';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lista de alimentos"
          component={MyFoodListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
