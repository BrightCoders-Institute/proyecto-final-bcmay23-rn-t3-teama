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
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '93%',
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
        alignItems: 'center',
        marginBottom: 20,
        width: '93%',
      },
      titleContainer:{
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginVertical: '3%',
      },
      titleContainer2:{
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginVertical: 10,
      }
})