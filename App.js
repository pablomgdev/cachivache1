import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import FoodListScreen from './src/screens/food-list';

const Stack = createNativeStackNavigator();

const stackOptions = {
  headerStyle: {
    backgroundColor: '#4287f5', // TODO: save in a constant the primary color
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lista de alimentos"
          component={FoodListScreen}
          options={stackOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
