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

const iconType: { [type: string]: any } = {
    time: require('../../assets/img/clockBadgeIcon.png'),
    level: require('../../assets/img/levelBadgeIcon.png'),
    kcal: require('../../assets/img/flameBadgeIcon.png'),
};

/**
 * Componente MealInfoBadge.
 *
 * @param {MealInfoBadgeProps} props
 * - Type [ time, level, kcal ]
 * - Data ( Número de minutos, dificultad o número de kcal )
 * @returns {JSX.Element} El componente MealInfoBadge.
 *
 * @example
 * // Uso del componente con propiedades válidas
 * <MealInfoBadge type="time" data="15" />
 *
 * @example
 * // Uso del componente con propiedades válidas
 * <MealInfoBadge type="level" data="Intermediate" />
 *
 * @example
 * // Uso del componente con propiedades válidas
 * <MealInfoBadge type="kcal" data="807" />
 */
const MealInfoBadge = ({ type, data }: MealInfoBadgeProps): JSX.Element => {
    const badgeColor = backgoundType[type];
    const dataType = type === 'time' ? 'Min' : type === 'level' ? 'Level' : 'Kcal';
    const icon = iconType[type];

    return (
        <View style={{ ...styles.badgeContainer, backgroundColor: badgeColor }}>
            <Image source={icon} style={styles.badgeIcon} />
            <Text style={styles.badgeInfo}>{data}</Text>
            <Text style={styles.badgeInfo}>{dataType}</Text>
        </View>
    );
};

export default MealInfoBadge;


