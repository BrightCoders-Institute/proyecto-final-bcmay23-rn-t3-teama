import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native';
import { styles } from './styles';
import { MealInfoBadgeProps } from '../../interfaces/interfaces';

const backgoundType: { [type: string]: string } = {
    time: '#795DEA',
    level: '#56ADEC',
    kcal: '#F3A939',
};

const MealInfoBadge = ({ type, icon, data }: MealInfoBadgeProps) => {
    const badgeColor = backgoundType[type];
    const dataType = type === 'time' ? 'Min' : type === 'level' ? 'Level' : 'Kcal';

    return (
        <View style={{ ...styles.badgeContainer, backgroundColor: badgeColor }}>
            <Image source={icon} style={styles.badgeIcon} />
            <Text style={styles.badgeInfo}>{data}</Text>
            <Text style={styles.badgeInfo}>{dataType}</Text>
        </View>
    );
};

export default MealInfoBadge;
