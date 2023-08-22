// import { StyleSheet } from 'react-native';

// export const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#795DEA',
//         marginTop: 5,
//     },
//     nutritionistInfoContainer: {
//         backgroundColor: '#ffffff',
//         borderTopRightRadius: 20,
//         borderTopLeftRadius: 20,
//         paddingHorizontal: 35,
//         paddingTop: 25,
//         display: 'flex',
//     },
//     imageContainer: {
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     circle: {
//         width: '70%',
//         aspectRatio: 1,
//         borderRadius: 999,
//         backgroundColor: '#8E7BD7',
//         position: 'absolute',
//         left: '-15%',
//         bottom: '-30%',
//     },
//     nutritionistImage: {
//         resizeMode: 'contain',
//         position: 'absolute',
//         left: '-30%',
//     },
//     locationContainer: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     separationText: {
//         marginBottom: 8,
//     },
//     biographyText: {
//         fontSize: 12,
//         color: '#686E73',
//         marginTop: 8,
//         lineHeight: 18,
//         marginBottom: 20,
//     },
//     starContainer: {
//         marginRight: 5,
//     },
//     starRatingContainer: {
//         marginBottom: 8,
//         flexDirection: 'row',
//     },
//     nutriName: {
//         fontSize: 24,
//         marginBottom: 5,
//         color: 'black',
//         fontWeight: 'bold',
//     },
//     nutriMajor: {
//         fontSize: 17,
//         color: '#795DEA',
//         fontWeight: '500',
//     },
//     nutriRating: {
//         color: '#989595',
//         fontSize: 12,
//         marginLeft: 5,
//     },
//     nutriCityCountry: {
//         color: '#989595',
//         fontSize: 12,
//         marginLeft: 5,
//         fontWeight: '400',
//     },
//     biographyTitle: {
//         fontSize: 18,
//         color: 'black',
//         fontWeight: '500',
//     },
//     stars: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
// });




// la parte de abajo
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#795DEA',
        marginTop: 5,
    },
    nutritionistInfoContainer: {
        flex: 2,
        backgroundColor: '#ffffff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 35,
        paddingTop: 25,
        // justifyContent: 'space-between',
        justifyContent: 'space-evenly',
        // justifyContent: 'space-around',
        paddingBottom: 40,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    circle: {
        width: '80%',
        aspectRatio: 1,
        borderRadius: 999,
        backgroundColor: '#8E7BD7',
        position: 'absolute',
        left: '-20%',
        bottom: '-65%',
    },
    nutritionistImage: {
        resizeMode: 'contain',
        position: 'absolute',
        left: '-32%',
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
