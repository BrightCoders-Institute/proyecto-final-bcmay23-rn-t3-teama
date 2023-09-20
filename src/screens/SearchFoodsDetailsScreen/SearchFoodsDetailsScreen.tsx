import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { useRoute } from '@react-navigation/native';
import { RecipeImg } from '../../components/RecipeImg/RecipeImg';
import { Title } from '../../components/Title/Title';

export const SearchFoodsDetailsScreen = () => {
    const route = useRoute();
    const { item } = route.params;
    console.log(item.food.nutrients);

    return (
        <View style={styles.container}>
            <RecipeImg imgSource={item.food.image || 'https://www.idsplus.net/wp-content/uploads/default-placeholder.png'} />
            <View style={styles.titleContainer}>
                <View style={styles.title}>
                    <Title text={item.food.label} fontSize={22} />
                </View>
            </View>
            <View style={styles.nutritionalContainer}>
                <View style={styles.chartContainer}></View>
                <View style={styles.tableContainer}></View>
            </View>
        </View>
    );
};
