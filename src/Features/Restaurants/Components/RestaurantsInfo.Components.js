import React from "react";
import { Text, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import StarRating from "react-svg-star-rating";
import { Icon } from "react-native-elements";

import { Spacer } from "../Components/spacer/spacerComponent";

export const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "nkwobi",
    icon = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonape.com%2Frestaurant-pictogram-logo-logo-icon-svg-png.html&psig=AOvVaw0xMkdOi4REDG6HGf0AksFA&ust=1626907870692000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDOt6Xe8vECFQAAAAAdAAAAABAD",
    photos = [
      "https://picsum.photos/700",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      "https://www.vhv.rs/dpng/d/14-144759_now-open-icon-png-transparent-png.png",
      "https://ormernul.sirv.com/faceOfGbemi.jfif",
    ],
    address = "200, Abeokuta street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  return (
    <RestCard elevation={20}>
      <HeaderTitle>This is the type of food we eat everytime!</HeaderTitle>
      <Cover key={Math.random().toFixed(2)} source={{ uri: photos[1] }} />
      <InfoCard>
        <Title>{name}</Title>
        <Section>
          <StarRating size={12} count={Math.floor(rating)} />
          <SectionEnd>
            {isClosedTemporarily && (
              <Text
                variant="label"
                style={{ marginRight: 10, color: "red", fontWeight: 200 }}
              >
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer variant="left.small" />
            {isOpenNow && (
              <RestaurantIconImage
                name="restaurant-outline"
                type="ionicon"
                color="#ffffff"
                size={18}
              />
            )}
            <Spacer variant="left.small" />
          </SectionEnd>
        </Section>
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
  overflow: hidden;
  resize-mode: contain;
`;

const RestCard = styled(Card)`
  flex: 1;
  background-color: purple;
  margin-left: ${(props) => props.theme.space[2]};
  justify-content: flex-start;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const RestaurantIconImage = styled(Icon)`
  resizemode: stretch;
  margin-right: ${(props) => props.theme.space[2]};
  padding-top: -2em;
  overflow: hidden;
  resize: contain;
`;
// const RestaurntIcon = styled.Image`
//   width: 50%;
//   height: 50%;
//   resizemode: contain;
// `;
