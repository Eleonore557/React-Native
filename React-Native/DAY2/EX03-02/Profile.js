import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

/**
 * Profile screen
 */
export default class Menu extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam(''),
        };
    };

    render() {

        const { navigate, state } = this.props.navigation;

        return (
            <View style={styles.container}>
            <View style={styles.burger1}>
                <Text>Burger 1</Text>
                <Image style={{width: 300, height: 250}}
            source={{uri: 'https://media.gettyimages.com/photos/closeup-of-burger-picture-id763260055?s=612x612'}}/>

            </View>
            <View style={styles.burger2}>
                <Text>Burger 2</Text>
                <Image style={{width: 300, height: 250}}
            source={{uri: 'https://media.gettyimages.com/photos/closeup-of-burger-picture-id763260055?s=612x612'}}/>
            </View>
            <View style={styles.burger3}>
                <Text>Burger 3</Text>
                <Image style={{width: 300, height: 250}}
            source={{uri: 'https://media.gettyimages.com/photos/closeup-of-burger-picture-id763260055?s=612x612'}}/>
            </View>

                <Button
                    title="Page Menu"
                    onPress={() => navigate('Second')}
                />

            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    burger1: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    burger2: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    burger3: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});