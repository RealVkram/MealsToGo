import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";


import { RestaurantsInfo } from "../Components/RestaurantsInfo.Components";

export const RestaurantScreen = () => (
  <>
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search restaurants here" />
      </View>
      <RestaurantList>
        <RestaurantsInfo />
      </RestaurantList>    
    </SafeAreaView>
  </>
);


const RestaurantList = styled.View`
    flex: 0.5;
    background-color: ${(props) => props.theme.colors.bg.secondary}};
    padding: 0.2em;
    margin: ${(props) => props.theme.space[3]};
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    flex: 0.1,
    backgroundColor: "#F5FCFF",
    padding: 20,
    borderColor: "#F5FCFF",  
  },
});
