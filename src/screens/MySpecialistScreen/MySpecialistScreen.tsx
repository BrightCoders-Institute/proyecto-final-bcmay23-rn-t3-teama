import React, { useContext} from 'react';
import { View, useWindowDimensions, Image, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary';
import { RatingStar } from '../../components/RatingStar/RatingStar';
import { WhatsAppButton } from '../../components/WhatsAppButton/WhatsAppButton';
import { StackScreenProps } from '@react-navigation/stack';
import { NutritionistInfo } from '../../interfaces/interfaces';
import { AppContext } from '../../context/AppContext';

interface Props extends StackScreenProps<any, any> {}

export const MySpecialistScreen = ({navigation}: Props, { }: NutritionistInfo) => {
    const { height, width } = useWindowDimensions();
    const { appState: { nutriologistData } } = useContext(AppContext);

    const renderStars = () => {
        const starElements = [];

        const wholeStars = Math.floor(Number(`${nutriologistData.rating}`));
        const hasHalfStar = Number(`${nutriologistData.rating}`) - wholeStars >= 0.5;

        for (let i = 1; i <= 5; i++) {
            let filled: 'empty' | 'full' | 'half' = 'empty';
            if (i <= wholeStars) {
                filled = 'full';
            } else if (i === wholeStars + 1 && hasHalfStar) {
                filled = 'half';
            }

            starElements.push(
                <View key={i} style={styles.starContainer}>
                    <RatingStar filled={filled} size={18} />
                </View>
            );
        }
        return starElements;
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.circle} />
                <Image
                    source={{uri: nutriologistData.NutritionistImage}}
                    style={[styles.nutritionistImage, { height: height * 0.26, width: width * 0.47}]}
                    onError={(error) => console.error('Image Error:', error)}
                />
            </View>
            <View style={styles.nutritionistInfoContainer}>
                <View>
                    <Text style={styles.nutriName}>{`${nutriologistData.name}`}</Text>

                    <Text style={[styles.separationText, styles.nutriMajor]}>{`${nutriologistData.major}`}</Text>
                    <View style={styles.starRatingContainer}>
                        <View style={styles.stars}>{renderStars()}</View>
                        <Text style={styles.nutriRating}>{`${nutriologistData.rating}`}</Text>
                    </View>
                    <View style={[styles.locationContainer, styles.separationText]}>
                        <Icon name={'location-sharp'} size={22} color={'#795DEA'}/>
                        <Text style={styles.nutriCityCountry}>{`${nutriologistData.cityAndCountry}`}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Text style={styles.biographyTitle}>Biography</Text>
                    <Text style={styles.biographyText}>{`${nutriologistData.biography}`}</Text>
                </View>
                <View style={{ left: 40 }}>
                    <WhatsAppButton />
                </View>
                <ButtonSecondary title="Book Appointment →" color="#795DEA" fontSize={15} onPress={() => navigation.navigate('Book Appointment')} />
            </View>
        </SafeAreaView>
    );
};
