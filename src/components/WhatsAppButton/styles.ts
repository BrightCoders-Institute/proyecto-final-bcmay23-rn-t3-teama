import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#58D164',
        right: 20,
        bottom: 185,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 50,
        borderColor: '#FFFF',
        borderWidth: 4,
        width: 70,
        height: 70,
        zIndex:1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
      },
      
})