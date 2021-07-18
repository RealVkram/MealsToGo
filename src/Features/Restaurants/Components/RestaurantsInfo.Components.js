import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ListView,
  RefreshControl,
} from "react-native";
import { Card } from "react-native-paper";

export const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "Nkwobi",
    icon,
    photos = ["https://www.foodiesfeed.com/free-food-photo/nicely-served-burgers/"],
    address = "100 Umuonyia",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.text}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "purple" },
  cover: { padding: 20, backgroundColor: "green" },
  text: { color: "white", padding: 15, fontWeight: 50 },
});
