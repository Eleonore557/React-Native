import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';

let state = ''

function change(e){
  state = e
}

export default function App() {
  return (
      <View style = {styles.view}>
        <TextInput
        onChangeText = {(text) => change(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        >
          
        </TextInput>
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => }
        />
      </View>
  );
}

const styles = StyleSheet.create({
  view:{
    top: 100,
  }
});
