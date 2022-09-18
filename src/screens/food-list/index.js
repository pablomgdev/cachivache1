import * as React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet
} from 'react-native';

// TODO: Move data to another place
const DATA = [
  { id: 1, name: 'Chorizo' },
  { id: 2, name: 'Huevos' },
  { id: 3, name: 'Yogures' },
];

// TODO: refactor: move to components and so on...
function FoodCard(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // TODO: add global container centered with 90% of width.
  //  Maybe a styles prop has to be passed to the component.
  //  See how to center something in react native
  card: {
    backgroundColor: '#4287f5', // TODO: use a degraded color
    borderRadius: 15,
    padding: 10,
    margin: 3,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  }
});

function MyFoodListScreen() {
  const renderItem = ({ item }) => {
    return (
      <FoodCard name={item.name} />
    );
  }

  return (
    <FlatList data={DATA} renderItem={renderItem} />
  );
}

export default MyFoodListScreen;
