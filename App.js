import React from "react";
import { StatusBar as ExpoStatusbar } from "expo-status-bar";


import { RestaurantScreen } from "../screens/restaurant";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusbar style="auto" />
    </>
  );
}
