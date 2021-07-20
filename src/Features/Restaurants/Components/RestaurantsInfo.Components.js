import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import StarRating from "react-svg-star-rating";

export const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "nkwobi",
    icon,
    photos = [
      "https://picsum.photos/700",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    ],
    address = "200, Abeokuta street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestCard elevation={20}>
      <HeaderTitle>This is type of food we eat everytime!</HeaderTitle>
      <Cover key={Math.random().toFixed(2)} source={{ uri: photos[1] }} />
      <InfoCard>
        <Title>{name}</Title>
        <Rating>
          <StarRating
            size={10}
            count={Math.floor(rating)}
            unit="half"
            roundedCorner={true}
          />
          <TextEnd>Hi</TextEnd>
        </Rating>
        
        <Address>{address}</Address>
      </InfoCard>
    </RestCard>
  );
};

const InfoCard = styled.View`
  padding-bottom: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[2]};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.text.inverse};
  font-weight: ${(props) => props.theme.fontWeights.light}
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.inverse};
`;
const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.light};
  color: ${(props) => props.theme.colors.text.inverse};
  padding: ${(props) => props.theme.space[1]};
`;
const Cover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: 0.2em;
`;

const RestCard = styled(Card)`
  flex: 1;
  background-color: purple;
  margin-left: ${(props) => props.theme.space[2]};
`;

const Rating = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const TextEnd = styled.Text`
  flex-direction: row;
  justify-content: flex-end;
  text-align: left;
  `
