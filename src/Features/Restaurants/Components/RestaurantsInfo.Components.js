import React from "react";
import {
  Stylesheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ListView,
  RefreshControl,
} from "react-native";

export const RestaurantsInfo = ({restaurant = {}) => {

  const {
      name = 'Nkwobi',
      icon,
      photos = ["https://www.foodiesfeed.com/free-food-photo/nicely-served-burgers/"],
      address = "100 Umuonyia",
      isOpenNow = true,
      rating = 4,
      isClosedTemporarily
    } = restaurant
  return (
    <Text> Info</Text>
  )
}
