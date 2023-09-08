import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MyMealCardProps } from '../../interfaces/interfaces';
import { styles } from './styles';
import { Title } from '../Title/Title';
import { SubTitle } from '../SubTitle/SubTitle';

export const MyMealCardL = ({ title, caloriesRecomended, description, onPress, imgSource }: MyMealCardProps) => {

    const { appState } = useContext(AppContext);
    return (
        <TouchableOpacity 
            style={
                 appState.isCardDisabled[title] 
                ? [ styles.buttonContainer,{ opacity: .6 } ] 
                : styles.buttonContainer 
                } 
            onPress={onPress}>
            {imgSource && <Image source={imgSource} style={styles.buttonImage} />}
            <View style={styles.titleContainer}>
                <Title text={title} fontSize={22} />
                <SubTitle text={caloriesRecomended} fontSize={15} color="gray" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.buttonText}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};
