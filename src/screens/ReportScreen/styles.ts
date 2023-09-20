import { StyleSheet } from "react-native";
import { screenWidth } from "./ReportScreen";

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
    padding: screenWidth * 0.08,
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
  },
  calendarContainer: {
    backgroundColor: 'white',
    height: 180,
    elevation: 5,
    shadowColor: 'black',
    marginBottom: 10,
  },
  dayTitle: {
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 22,
    marginLeft: 25,
  },
  noDataFound: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
