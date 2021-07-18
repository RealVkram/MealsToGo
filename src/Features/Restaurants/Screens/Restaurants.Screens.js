import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantsInfo } from "../Components/RestaurantsInfo.Components";

export const RestaurantScreen = () => (
  <>
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.list}>
        <RestaurantsInfo />
      </View>
    </SafeAreaView>
  </>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 20,
  },
});
