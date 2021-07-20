import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ListView,
  RefreshControl,
  Platform,
} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";



export const RestaurantsInfo = ({ restaurant = {} }) => {
  
  const {
    name = "nkwobi",
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
      <HeaderTitle>This is the type of food we eat</HeaderTitle>
      <Cover key={Math.random().toFixed(2)} source={{ uri: photos[1] }} />
      <Title>{name}</Title>
    </RestCard>
  );
};

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.sizes[5]};
  font-weight: {(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.inverse};
  padding: ${(props) => props.theme.space[1]};
  justify: center;
`;
const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.sizes[1]};
  font-weight: {(props) => props.theme.fontWeights.light};
  color: ${(props) => props.theme.colors.text.inverse};
  padding: ${(props) => props.theme.space[1]};
  justify: left;
`;
const Cover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: 0.2em;
`;	

const RestCard = styled(Card)`
  background-color: purple;
  padding: 0.1em;
  margin-left: ${(props) => props.theme.space[2]};
`;
