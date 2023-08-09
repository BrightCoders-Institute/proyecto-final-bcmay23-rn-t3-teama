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


/**
 * Componente MealInfoBadge.
 *
 * @param {MealInfoBadgeProps} props
 * - Type [ time, level, kcal ]
 * - Icon ( ruta de imagen )
 * - Data ( Número de minutos, dificultad o número de kcal )
 * @returns {JSX.Element} El componente MealInfoBadge.
 *
 * @example
 * // Uso del componente con propiedades válidas
 * <MealInfoBadge type="time" icon={require('./timeIcon.png')} data="15" />
 *
 * @example
 * // Uso del componente con propiedades válidas
 * <MealInfoBadge type="level" icon={require('./levelIcon.png')} data="Intermediate" />
 */
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


