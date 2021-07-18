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
    photos = ["https://picsum.photos/700", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"],
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[1]}}/>
      <Text style={styles.text}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "purple" },
  cover: { padding: 20, backgroundColor: "green" },
  text: { color: "white", padding: 15, fontWeight: 50 },
});
