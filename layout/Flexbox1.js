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

export default class Flexbox1 extends Component<{}> {
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
    },
    redView: {
        flex: 1, // 비율
        backgroundColor: 'red'
    },
    yellowView: {
        flex: 6, // 비율
        backgroundColor: 'yellow'
    }
});
