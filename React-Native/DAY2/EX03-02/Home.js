import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';

/**
 * Home screen
 */
export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
            <Text  style={styles.burger}> Menu Burger Healthy</Text>

            <Image style={styles.burger}
            style={{width: 300, height: 250, margin: 200}}
            source={{uri: 'https://media.gettyimages.com/photos/closeup-of-burger-picture-id763260055?s=612x612'}}
                />
                <Button 
                    title="Menu"
                    onPress={() => navigate(
                        'Menu', { name: '' }
                    )}
                />
                
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        
    },
    burger: {
        fontSize: 40
    }
    
});