import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#25a35a',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 20,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    btnClean: {
        borderRadius: 7,
        backgroundColor: '#b93d2f',
    },
    clean: {
        color: '#fff',
        fontWeight: 'bold',
        padding: 10,
    }
});

export default class DishShop extends Component {
    render() {
        const { addProductSelected, onPress } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Total carrito ({addProductSelected.length})</Text>
                <TouchableOpacity
                    style={styles.btnClean}
                    onPress={() => onPress()}
                >
                    <Text style={styles.clean}>Vaciar Carrito</Text>
                </TouchableOpacity>
            </View>
        )
    }
};