import React from "react";
import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import {
  Lato_400Regular,
  Lato_400Regular_Italic,
} from "@expo-google-fonts/lato";


import { RestaurantScreen } from "./src/Features/Restaurants/Screens/Restaurants.Screens";
import { theme } from "./src/Infrastructure/theme/index";

export default function App() {
  const [fontLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
    Lato_400Regular_Italic,
  });

  if (!fontLoaded) {
    return null;
  }

 
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusbar barStyle="auto" />
    </>

  );
}
