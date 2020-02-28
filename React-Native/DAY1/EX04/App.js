import React, { Component } from 'react';
import { View,Text,StyleSheet, Image } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style = { styles.background }>
       
               <View style={{width: 500, height: 100, backgroundColor: '#000',}}>
                 <Text style={styles.textStyle}> Header </Text></View>
               
              <View style = {styles.header}>
        
      </View>
      
            <Text style={styles.textStyle3}> Hello </Text>
            <Image
                style={{width: width, height: height}}
                source={{uri: 'https://image.shutterstock.com/z/stock-photo-large-beautiful-drops-of-transparent-rain-water-on-a-green-leaf-macro-drops-of-dew-in-the-morning-668593321.jpg'}}
            />
          

          <View style={{width: 500, height: 100, backgroundColor: 'white',  textAlign: 'center',}}>
            <Text style={styles.textStyle2}>Footer </Text></View>
            <View style={styles.footer}
          ></View>
      </View>
      
    
    );
  }
};


const styles = StyleSheet.create({
  textStyle : {
    color: "grey",
    fontSize: 20,
    color: "white",
    textAlign: 'center',
    width: 400,
    marginTop: 50
    
    
  },
 header : {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',

 },
  footer : {
    flex: 1,
    marginTop:700
 

  },
  textStyle2: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    width: 400,
    marginTop: 500
  },
  background: {
    backgroundColor: 'grey'
  },
  textStyle3: {
    fontSize: 20,
    textAlign: 'center',
    width:400,
    
  }
  
  

})