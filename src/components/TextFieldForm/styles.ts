import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    inputFieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    inputField: {
        borderWidth: 1.5,
        borderColor: '#F4F3F3',
        backgroundColor: '#F4F3F3',
        borderRadius: 10,
        paddingStart: 7,
        width: '80%',
        height: 55,
    },
    focus: {
        borderColor: '#B6B6B6',
    },
    iconContainer: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
    fieldContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        color: '#888888',
        fontSize: 15,
        marginBottom: 10,
    },
    feedbackValidation: {
        color: 'red',
        fontSize: 12,
        alignSelf: 'flex-start',
        marginLeft: '10%',
    },
});
