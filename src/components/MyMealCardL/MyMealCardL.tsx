import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MealDataProps, MyMealCardProps } from '../../interfaces/interfaces';
import { styles } from './styles';
import { Title } from '../Title/Title';
import { SubTitle } from '../SubTitle/SubTitle';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export const MyMealCardL = ({ title, caloriesRecomended, description, onPress, imgSource, mealId }: MyMealCardProps) => {
    const navigation = useNavigation();
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
                } else {
                    console.log('No se encontró el documento');
                }
            })
            .then( () => {
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error al obtener los datos:', error);
            });
    };

    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Meals Details', { mealData })}>
            { (isLoading === false && mealData !== null) ? (
                <>
                    {/* {imgSource && <Image source={imgSource} style={styles.buttonImage} />} */}
                    <Image source={{uri: mealData?.image}} style={styles.buttonImage} />
                    <View style={styles.titleContainer}>
                        <Title text={title} fontSize={22} />
                        <SubTitle text={`${mealData?.name}`} fontSize={15} color="#7B5FEC" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.buttonText}>{`${mealData?.description}`}</Text>
                    </View>
                </>
            ) : (
                <Text>Loading...</Text>
            ) }
        </TouchableOpacity>
    );
};
