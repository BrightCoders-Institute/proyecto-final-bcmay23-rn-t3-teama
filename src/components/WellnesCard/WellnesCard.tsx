import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { WellnesCardProps } from '../../interfaces/interfaces';
import { styles } from './styles';

export const WellnesCard = ({ title, onPress, imgSource, backgroundColor }: WellnesCardProps) => {
    const buttonContainerStyle =[
        styles.buttonContainer,
        { backgroundColor: backgroundColor ? backgroundColor : '#FFFF' },
    ]
    
    return (
        <TouchableOpacity style={ buttonContainerStyle } onPress={onPress}>
            <Icon name={ 'play-circle-outline' } size={35} color={'white'} style={ styles.icon } />
            <View style={styles.textContainer}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
            {imgSource && <Image source={imgSource} style={styles.buttonImage} />}
        </TouchableOpacity>
    );
};
