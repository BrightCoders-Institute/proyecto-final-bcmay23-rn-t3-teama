import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    backgroungImage: {
        width: '100%',
        height: 220,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoriesFlatlist: {
        maxHeight: 65,
    },
    button: {
        paddingHorizontal: 10,
        marginHorizontal: 5,
        marginBottom: 20,
        backgroundColor: '#E1E1E1',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    selectedButton: {
        backgroundColor: '#F3A939',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
    },
    selectedButtonText: {
        color: 'white',
    },
    exerciseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 20,
        marginBottom: 16,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    itemImageContainer: {
        alignItems: 'flex-start',
    },
    itemImage: {
        width: 85,
        height: 85,
        marginLeft: 10,
        marginRight: 15,
        borderRadius: 20,
    },
    itemInfo: {
        width: '70%',
    },
    exerciseText: {
        color: '#151515',
        fontSize: 22,
        fontWeight: '700',
    },
    targetText: {
        color: '#A4A4A4',
        fontSize: 15,
    },
});
