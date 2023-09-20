import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { WellcomeProgressCardProps } from '../../interfaces/interfaces';
import { styles } from './styles';
import { ProgressBar } from 'react-native-paper';
import { calculateProgress } from '../../helpers/progressBar';
import { AppContext } from '../../context/AppContext';


export const WellcomeProgressCard = ({ title, onPress, imgSource }: WellcomeProgressCardProps) => {
    const {appState} = useContext(AppContext);

    const consumedValue = appState.consumedCalories;
    // const totalValue = appState.caloriesPerDay;
    const totalValue = appState.userData.caloriesPerDay;

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
                    progress={appState.consumedCalories / totalValue}
                    style={styles.progressBar}
                />
            </View>
        </TouchableOpacity>
    );
};
