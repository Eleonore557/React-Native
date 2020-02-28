import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style = {styles.text}>
               BUTTON
            </Text>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  
      
  },
  text: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'blue',
    backgroundColor: 'blue',
    color : "#fff"
  }
});
