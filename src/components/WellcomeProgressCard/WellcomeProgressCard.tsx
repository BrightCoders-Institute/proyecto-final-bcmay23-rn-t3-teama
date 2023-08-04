import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { WellcomeProgressCardProps } from '../../interfaces/interfaces';
import { styles } from './styles';



export const WellcomeProgressCard = ({ title, onPress, imgSource }: WellcomeProgressCardProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
            ]}
            onPress={onPress}>
            {imgSource && <Image source={imgSource} style={styles.buttonImage} />}
            <View>
                <Text style={styles.titleText}>{title}</Text>
                <View style={styles.caloriesContainer}>
                    <Text style={styles.caloriesConsumedText}>2,028</Text>
                    <Text style={styles.totalCaloriesText}> / 3,100</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

