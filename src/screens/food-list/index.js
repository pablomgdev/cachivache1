import * as React from 'react';
import {
  FlatList, StyleSheet, Text, View
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
      <Text style={styles.cardContentText}>Caduca: 19/12/2022</Text>
      <Text style={styles.cardContentText}>Abierto: 19/12/2022</Text>
      <Text style={styles.cardContentText}>Consumir antes del 19/12/2022</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // TODO: add global container centered with 90% of width.
  //  Maybe a styles prop has to be passed to the component.
  //  See how to center something in react native
  card: {
    minWidth: '90%',
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
    marginBottom: 8,
  },
  cardContentText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
  },
});

function MyFoodListScreen() {
  const renderItem = ({ item }) => {
    return (
      <FoodCard name={item.name} />
    );
  }

  return (
    <FlatList
      contentContainerStyle={pageStyles.foodList}
      data={DATA}
      renderItem={renderItem} />
  );
}

const pageStyles = StyleSheet.create({
  foodList: {
    alignItems: 'center',
  },
});

export default MyFoodListScreen;
