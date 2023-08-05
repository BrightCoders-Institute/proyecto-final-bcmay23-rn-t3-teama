import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    buttonContainer: {
        backgroundColor:'white',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '95%',
        height: 120,
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
        color: 'black',
        fontSize: 18,
    },
    buttonImage: {
        position: 'absolute',
        left: '10%',
        width: 25,
        height: 25,
    },
    caloriesConsumedText: {
        color: '#58D164',
        fontSize: 18,
    },
    totalCaloriesText: {
        color: 'black',
        fontSize: 18,
    },
    caloriesContainer:{
        flexDirection: 'row',
    }
})