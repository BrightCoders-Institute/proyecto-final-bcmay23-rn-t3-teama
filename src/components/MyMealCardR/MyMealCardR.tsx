import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MealDataProps, MyMealCardProps } from '../../interfaces/interfaces';
import { styles } from './styles';
import { Title } from '../Title/Title';
import { SubTitle } from '../SubTitle/SubTitle';
import firestore from '@react-native-firebase/firestore';

export const MyMealCardR = ({ title, caloriesRecomended, description, onPress, imgSource, mealId }: MyMealCardProps) => {
    const [mealData, setMealData] = useState<MealDataProps | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (mealId) getMealData();
        // console.log(mealId);
    }, [mealId]);

    const getMealData = () => {
        setIsLoading(true);
        firestore()
            .collection('meal')
            .doc(mealId[0].meal_id)
            .get()
            .then((mealDoc) => {
                if (mealDoc.exists) {
                  const mealInfo = mealDoc.data();
                  setMealData(mealInfo);
                  setIsLoading(false);
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
            { (isLoading === false && mealData !== null) ? (
                <>
                    <View style={styles.titleContainer}>
                        <Title text={title} fontSize={22} />
                        <SubTitle text={`${mealData?.name}`} fontSize={15} color="#7B5FEC" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.buttonText}>{`${mealData?.description}`}</Text>
                    </View>
                    {/* {imgSource && <Image source={imgSource} style={styles.buttonImage} />} */}
                    <Image source={{uri: mealData?.image}} style={styles.buttonImage} />
                </>
            ) : (
                <Text>Loading...</Text>
            ) }
        </TouchableOpacity>
    );
};
