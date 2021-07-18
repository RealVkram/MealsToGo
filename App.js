import React from "react";
import { StatusBar as ExpoStatusbar } from "expo-status-bar";

import { RestaurantScreen } from "./src/Features/Restaurants/Screens/Restaurants.Screens";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusbar style="auto" />
    </>
  );
}
