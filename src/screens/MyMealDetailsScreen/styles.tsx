import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexGrow: 1,
        paddingVertical: '2%',
    },
    titleContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        padding: '2%',
    },
    subtitle: {
        width: '60%',
        fontSize: 17,
    },
    btnRecipe: {
        marginVertical: '2%',
        marginBottom: '-2%',
    },

    btnCompleted: {
        marginBottom: 10,
    },
    perServingTitle: {
        marginStart: '7%',
    },
});
