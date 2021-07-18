import React from "react";
import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { RestaurantScreen } from "./src/Features/Restaurants/Screens/Restaurants.Screens";
import { theme } from "./src/Infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusbar style="auto" />
    </>
  );
}
