import React from "react";
import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusbar style="auto" />
    </>
  );
}

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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 20,
  },
});
