/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import DishList from './components/DishExample/DishList';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#2d3e4f'
    },
});

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeArea}>
                <DishList />
            </SafeAreaView>
        </>
    );
};

export default App;