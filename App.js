import { StatusBar as ExpoStatusbar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {  

  return (
    <>    
      <SafeAreaView style={styles.container}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'purple'}}>
     <Text style={{color: 'white'}}>Lets move for big dough</Text>
        
    </View>
        <View style={{flex: 1}}>
          <Text>Cant say same here</Text>
        </View>
        <ExpoStatusbar style="auto"/>
    </SafeAreaView>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight
  }
});
