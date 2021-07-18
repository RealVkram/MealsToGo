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
import styled from "styled-components/native";

export const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "Nkwobi",
    icon,
    photos = [
      "https://picsum.photos/700",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    ],
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestCard elevation={5}>
      <Cover key={Math.random().toFixed(2)} source={{ uri: photos[1] }} />
      <Title>{name.toUpperCase()}</Title>
    </RestCard>
  );
};

const Title = styled.Text`
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
  padding: 0.5em;
  align-self: center;
  justify: center;
`;
const Cover = styled(Card.Cover)`
  background-color: green;
  padding: 0.5em;
`;

const RestCard = styled(Card)`
  background-color: purple;
`;
