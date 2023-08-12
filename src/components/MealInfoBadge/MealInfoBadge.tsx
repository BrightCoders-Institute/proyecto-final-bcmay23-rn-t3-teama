import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native';
import { styles } from './styles';
import { MealInfoBadgeProps } from '../../interfaces/interfaces';

const backgroundType = {
    time: '#795DEA',
    level: '#56ADEC',
    kcal: '#F3A939',
};

const iconType = {
    time: require('../../assets/img/clockBadgeIcon.png'),
    level: require('../../assets/img/levelBadgeIcon.png'),
    kcal: require('../../assets/img/FlameBadgeIcon.png'),
};

/**
 * MealInfoBadge Component.
 *
 * @param {MealInfoBadgeProps} props
 * -
 * - Minutes: Amount or range of minutes
 * - Level: Difficulty
 * - Kcal: Amount of kcal
 * @returns {JSX.Element} MealInfoBadge.
 *
 * @example
 * // Using the component with valid properties
 * <MealInfoBadge minutes="10-15" level="Easy" kcal="807"/>
 */
const MealInfoBadge = ({ minutes, level, kcal }: MealInfoBadgeProps): JSX.Element => {
    return (
        <View style={styles.mainContainer}>
            <View style={{ ...styles.badgeContainer, backgroundColor: backgroundType.time }}>
                <Image source={iconType.time} style={styles.badgeIcon} />
                <Text style={styles.badgeInfo}>{minutes}</Text>
                <Text style={styles.badgeInfo}>Min</Text>
            </View>
            <View style={{ ...styles.badgeContainer, backgroundColor: backgroundType.level }}>
                <Image source={iconType.level} style={styles.badgeIcon} />
                <Text style={styles.badgeInfo}>{level}</Text>
                <Text style={styles.badgeInfo}>Level</Text>
            </View>
            <View style={{ ...styles.badgeContainer, backgroundColor: backgroundType.kcal }}>
                <Image source={iconType.kcal} style={styles.badgeIcon} />
                <Text style={styles.badgeInfo}>{kcal}</Text>
                <Text style={styles.badgeInfo}>Kcal</Text>
            </View>
        </View>
    );
};

export default MealInfoBadge;


