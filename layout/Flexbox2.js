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

export default class Flexbox2 extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.redView}/>
                <View style={styles.yellowView}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    redView: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    yellowView: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow'
    }
});
