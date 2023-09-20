import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    foodItem: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 16,
        paddingHorizontal: 5,
        paddingVertical: 10,
        // backgroundColor: 'red',
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
        // justifyContent: 'center',
    },
    foodTitle: {
        color: '#151515',
        fontSize: 15,
        // fontWeight: '700',
    },
    foodText: {
        color: '#151515',
        fontSize: 12,
        fontStyle: 'italic',
        // fontWeight: '700',
    },
    foodTextContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 5,
    },
});
