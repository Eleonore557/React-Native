import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

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

                <Button
                    title="First Page"
                    onPress={() => navigate(
                        'Profile', { name: '' }
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
        justifyContent: 'center'
    }
});