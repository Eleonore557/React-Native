import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

 render() {
   return (
     <View style={styles.container}>
     <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style={styles.text}> BUTTON </Text>
       </TouchableOpacity>
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 160,
    backgroundColor: 'grey'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 20
  },
  countText: {
    color: 'black'
  },
  text: {
    color: "#fff"
  }
})
