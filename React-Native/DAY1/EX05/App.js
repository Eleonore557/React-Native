import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView,View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style = { styles.background }>
       
  

      </View>

      <View style = { styles.background2 }>
       
  

       </View>

       <View style = { styles.background3 }>
       
  

       </View>
       
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  background: {
    width:50,
    height:50,
    backgroundColor:'blue'
  },
  background2: {
    width:400,
    height:400,
    backgroundColor:'white',
    
  },
  background3: {
    width:800,
    height:800,
    backgroundColor:'red'
  }

});