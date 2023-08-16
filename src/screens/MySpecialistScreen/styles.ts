import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#795DEA',
        marginTop: 5,
    },
    nutritionistInfoContainer: {
        backgroundColor: '#ffffff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 35,
        paddingTop: 25,
        display: 'flex',
    },
    imageContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    circle: {
        width: '91%',
        aspectRatio: 1,
        borderRadius: 999,
        backgroundColor: '#8E7BD7',
        position: 'absolute',
        left: '-24%',
        bottom: '-30%',
    },
    nutritionistImage: {
        resizeMode: 'contain',
        position: 'absolute',
        left: '-25%',
    },
    locationContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    separationText: {
        marginBottom: 8,
    },
    biographyText: {
        fontSize: 12,
        color: '#686E73',
        marginTop: 8,
        lineHeight: 18,
        marginBottom: 20,
    },
    starContainer: {
        marginRight: 5,
    },
    starRatingContainer: {
        marginBottom: 8,
        flexDirection: 'row',
    },
    nutriName: {
        fontSize: 24,
        marginBottom: 5,
        color: 'black',
        fontWeight: 'bold',
    },
    nutriMajor: {
        fontSize: 17,
        color: '#795DEA',
        fontWeight: '500',
    },
    nutriRating: {
        color: '#989595',
        fontSize: 12,
        marginLeft: 5,
    },
    nutriCityCountry: {
        color: '#989595',
        fontSize: 12,
        marginLeft: 5,
        fontWeight: '400',
    },
    biographyTitle: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500',
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
