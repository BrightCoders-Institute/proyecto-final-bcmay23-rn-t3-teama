import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { WellcomeProgressCardProps } from '../../interfaces/interfaces';
import { styles } from './styles';
import { ProgressBar } from 'react-native-paper';
import { calculateProgress } from '../../helpers/progressBar';


export const WellcomeProgressCard = ({ title, onPress, imgSource }: WellcomeProgressCardProps) => {
    const consumedValue = '100';
    const totalValue = '3, 100';

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
                    <Text style={styles.caloriesConsumedText}>{consumedValue}</Text>
                    <Text style={styles.totalCaloriesText}> / {totalValue} Cal</Text>
                </View>
                <ProgressBar
                    color="#58D164"
                    progress={calculateProgress(consumedValue, totalValue)}
                    style={styles.progressBar}
                />
            </View>
        </TouchableOpacity>
    );
};
