import * as React from 'react';
import { FlatList, View, Text } from 'react-native';

const DATA = [
  { id: 1, name: 'Chorizo' },
  { id: 2, name: 'Huevos' },
  { id: 3, name: 'Yogures' },
];

// TODO: refactor: move to components and so on...
function FoodCard(props) {
  return (
    <View>
      <Text>Food: {props.name}</Text>
    </View>
  );
}

function MyFoodListScreen() {
  const renderItem = ({ item }) => {
    return (
      <FoodCard name={item.name} />
    );
  }

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
    />
  );
}

export default MyFoodListScreen;
