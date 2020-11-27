import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, View, Text, Alert } from 'react-native';
import HorizontalScroll from '../HorizontalScroll';
import { baseUri, dishData, dishTitles } from '../../rawData';
import DishCard from './DishCard';
import DishShop from './DishShop';

const styles = StyleSheet.create({
    flatListContainer: {
        padding: 10,
        width: '100%',
    },
    horizontalScroll: { margin: 10 },
});

export default class DishList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: dishData,
            selectedDishes: [],
            addProductSelected: [],
        };
    }

    selectDishes = (name) => {
        const { dishes } = this.state;
        const filteredDishes = dishes.filter((dish) => dish.cuisine === name);
        this.setState({ selectedDishes: filteredDishes });
    };

    addProduct = (product) => {
        const { addProductSelected } = this.state;

        if (addProductSelected.find((item) => item.id === product.id)) {
            return;
        }

        const newProducts = [...addProductSelected, product];
        this.setState({ addProductSelected: newProducts });
        Alert.alert("¡Muy Bien!", "Agregado al carrito!");
    };

    cleanCart = () => {
        Alert.alert(
            'Confirmación',
            '¿Quieres eliminar todo el carrito?',
            [
                {
                    text: 'Borra todo!!',
                    onPress: () => this.setState({ addProductSelected: [] }),
                },
                {
                    text: 'Me arrepentí',
                    onPress: () => null,
                    style: 'cancel',
                }
            ],
            { cancelable: false },
        );
    };

    render() {
        const { selectedDishes, addProductSelected } = this.state;
        return (
            <>
                <HorizontalScroll
                    style={styles.horizontalScroll}
                    onPress={this.selectDishes}
                />
                <FlatList
                    style={styles.flatListContainer}
                    data={selectedDishes}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({
                        item: { id, title, readyInMinutes, servings, image, sourceUrl },
                    }) => (
                            <DishCard
                                idProduct={id}
                                title={title}
                                readyInMinutes={readyInMinutes}
                                servings={servings}
                                image={image}
                                sourceUrl={sourceUrl}
                                onPress={this.addProduct}
                            />
                        )}
                    ListEmptyComponent={() => (
                        <View>
                            <Text>No hay items</Text>
                        </View>
                    )}
                />
                <DishShop addProductSelected={addProductSelected} onPress={this.cleanCart} />
            </>
        );
    }
}