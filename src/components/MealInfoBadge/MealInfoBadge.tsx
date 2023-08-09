import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native';
import { styles } from './styles';
import { MealInfoBadgeProps } from '../../interfaces/interfaces';

const MealInfoBadge = ({ type, icon, data }: MealInfoBadgeProps) => {
    return (
        <View style={[styles.badgeContainer]}>
            <Image
                source={icon}
                style={styles.badgeIcon}
            />
            <Text style={styles.badgeInfo}>{data}</Text>
            <Text style={styles.badgeInfo}>{ }</Text>
        </View>
    );
};

export default MealInfoBadge;
