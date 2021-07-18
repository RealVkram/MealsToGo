import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";


import { RestaurantsInfo } from "../Components/RestaurantsInfo.Components";

export const RestaurantScreen = ({ theme}) => (
  <>
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search restaurants here" />
      </View>
      <View style={styles.list}>
        <RestaurantsInfo theme={theme}/>
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
    flex: 0.5 ,
    backgroundColor: "#F5FCFF",
    padding: 20,
    borderColor: "#F5FCFF",  
  },
  list: {
    flex: 0.5,
    backgroundColor: "blue",
    padding: 20,
  },
});
