import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    buttonContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '95%',
        height: 105,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    titleText: {
        color: '#A69C9C',
        fontSize: 20,
        marginBottom: 5,
    },
    buttonImage: {
        position: 'absolute',
        left: '10%',
        width: 25,
        height: 25,
    },
    caloriesConsumedText: {
        color: '#58D164',
        fontSize: 20,
    },
    totalCaloriesText: {
        color: '#A69C9C',
        fontSize: 20,
    },
    caloriesContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    progressBar: {
        height: 15,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
    },
});
