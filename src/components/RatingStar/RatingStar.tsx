import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RatingStarProps } from '../../interfaces/interfaces';

export const RatingStar: React.FC<RatingStarProps> = ({ filled, size }) => {

    const selectStar = () => {
        const iconMapping: Record<string, string> = {
            full: 'star',
            half: 'star-half',
        };
        const iconName = iconMapping[filled] || 'star-outline';

        return <Icon name={iconName} size={size} color="gold" />;
    };

    return (
        <View style={{ width: size, height: size }}>
            { selectStar() }
        </View>
    );
};
