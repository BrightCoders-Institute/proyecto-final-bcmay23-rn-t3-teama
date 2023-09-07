import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MealDataProps, MyMealCardProps } from '../../interfaces/interfaces';
import { styles } from './styles';
import { Title } from '../Title/Title';
import { SubTitle } from '../SubTitle/SubTitle';
import firestore from '@react-native-firebase/firestore';

export const MyMealCardR = ({ title, caloriesRecomended, description, onPress, imgSource, mealId }: MyMealCardProps) => {
    const [mealData, setMealData] = useState<MealDataProps | null>(null);

    useEffect(() => {
        if (mealId) getMealData();
        console.log(mealId);
    }, [mealId]);

    const getMealData = () => {
        firestore()
            .collection('meal')
            .doc(mealId[0].meal_id)
            .get()
            .then((mealDoc) => {
                if (mealDoc.exists) {
                  const mealInfo = mealDoc.data();
                  setMealData(mealInfo);
                } else {
                  console.log('No se encontró el documento');
                }
            })
            .catch((error) => {
                console.error('Error al obtener los datos:', error);
            });
    };

    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <View style={styles.titleContainer}>
                <Title text={`${mealData?.name}`} fontSize={18} />
                <SubTitle text={`${mealData?.calories} calories`} fontSize={14} color="gray" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.buttonText}>{`${mealData?.description}`}</Text>
            </View>
            {/* {imgSource && <Image source={imgSource} style={styles.buttonImage} />} */}
            <Image source={{uri: mealData?.image}} style={styles.buttonImage} />
        </TouchableOpacity>
    );
};
