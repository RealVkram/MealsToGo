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
import { Card } from "react-native-paper"


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
    
    <Card>
  <Card.Cover source={photos[0]} />
    </Card>
  )
}
