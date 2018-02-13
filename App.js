/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';

export default class App extends Component<{}> {
    state = {
        isLoaded: false
    }

    render() {
        const {isLoaded} = this.state;
        return (
            <View style={styles.container}>
                {isLoaded ? null :
                    <View style={styles.loading}>
                        <Text style={styles.loadingText}>Getting the fucking weather</Text>
                    </View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    loading: {
        flex: 1,
        backgroundColor: '#FDF6AA',
        justifyContent: 'flex-end',
        paddingLeft: 25,
    },
    loadingText: {
        fontSize: 38,
        marginBottom: 100,
    }
});
