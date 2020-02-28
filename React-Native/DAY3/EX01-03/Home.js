import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, TouchableHighlight  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 20,
      justifyContent:'center'
    },
    button: {
  
      backgroundColor: '#DDDDDD',
      padding: 10,
      
    }
  })
  
export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://ghibliapi.herokuapp.com/films/')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  

  render(){
      const { navigation } = this.props
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <View  style={styles.container}>
          <TouchableHighlight   style={styles.button} onPress={() => navigation.navigate('Second', {id: item.id})}  underlayColor='red'>  
          <Text>{item.title}</Text>
            </TouchableHighlight>
            </View>}
          
        />
    );
  }
}