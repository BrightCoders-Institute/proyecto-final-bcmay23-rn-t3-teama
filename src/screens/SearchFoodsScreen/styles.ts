import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    foodItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 16,
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '90%',
        borderWidth: 0.1,
    },
    itemImageContainer: {
        alignItems: 'flex-start',
    },
    itemImage: {
        width: 85,
        height: 85,
        marginLeft: 10,
        marginRight: 15,
        borderRadius: 10,
    },
    itemInfo: {
        width: '70%',
        flexDirection: 'column',
        gap: 10,
    },
    foodTitle: {
        color: '#151515',
        fontSize: 15,
    },
    foodText: {
        color: '#151515',
        fontSize: 12,
        fontStyle: 'italic',
    },
    foodTextContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 5,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginVertical: 25,
    },
    intructions: {
        paddingHorizontal: 16,
        marginVertical: 25,
    },
    input: {
        flex: 1,
        height: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginRight: 12,
    },
    button: {
        backgroundColor: '#7B5FEC',
        borderRadius: 15,
        paddingHorizontal: 20,
        height: '100%',
        flexDirection: 'row',
    },
    buttonContent: {
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
