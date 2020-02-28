import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 * Profile screen
 */
export default class Profile extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam(''),
        };
    };

    render() {

        const { navigate, state } = this.props.navigation;

        return (
            <View style={styles.container}>

                <Text>{state.params.name}</Text>

                <Button
                    title="Second Page"
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
        justifyContent: 'center'
    }
});