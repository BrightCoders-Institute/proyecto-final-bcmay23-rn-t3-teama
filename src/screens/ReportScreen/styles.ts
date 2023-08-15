import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      topContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      centerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        backgroundColor: '#FFFF',
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
         },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
      },
      bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
      },
})