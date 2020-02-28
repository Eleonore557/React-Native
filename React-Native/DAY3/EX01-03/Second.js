import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, TouchableHighlight,ScrollView  } from 'react-native';

export default class Second extends React.Component {

        constructor(props){
            super(props);
            this.state ={ isLoading: true}
            
          }
        
          componentDidMount(){
            const {navigation} = this.props
            const id = navigation.getParam('id')
            return fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
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
            
            if(this.state.isLoading){
              return(
                <View style={{flex: 1, padding: 20}}>
                  <ActivityIndicator/>
                </View>
              )
            }
        
            return(
        
                <ScrollView contentContainerStyle={styles.card}>
            {/*Use navigation.getParam to get the params of navigation prefered since you can set a default value
            therefore not returning undefined and not crashing your app. */}
                <Text style={styles.title}>Title</Text>
                <Text style={styles.nameOffilm}>{this.state.dataSource.title}</Text>
                <Text style={styles.title}>Description</Text>
                <Text style={styles.nameOffilm}>{this.state.dataSource.description}</Text>
                <Text style={styles.title}>Director</Text>
                <Text style={styles.nameOffilm}>{this.state.dataSource.director}</Text>
                <Text style={styles.title}>Producer</Text>
                <Text style={styles.nameOffilm}>{this.state.dataSource.producer}</Text>
                <Text style={styles.title}>Release date</Text>
                <Text style={styles.nameOffilm}>{this.state.dataSource.release_date}</Text>
                <Text style={styles.title}>Score</Text>
                <Text style={styles.nameOffilm}>{this.state.dataSource.rt_score}</Text>
                </ScrollView>
            );
          }
        }


        const styles = StyleSheet.create({
            title: {
              flexDirection: 'row',
              padding: 20,
              justifyContent:'center'
            },
            id: {
          
              backgroundColor: '#DDDDDD',
              padding: 10,
              
            }
          })
