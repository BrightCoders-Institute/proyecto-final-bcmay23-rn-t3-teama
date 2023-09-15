import React, {useContext, useState, useEffect, useCallback} from 'react';
import { Dimensions, View, Text, FlatList } from 'react-native';
import { NutritionalChartProgress } from '../../components/NutritionalChartProgress/NutritionalChartProgress';
import { CircularProgressBar } from '../../components/CircularProgressBar/CircularProgressBar';
import { styles } from './styles';
import { Title } from '../../components/Title/Title';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { WhatsAppButton } from '../../components/WhatsAppButton/WhatsAppButton';
import { AppContext } from '../../context/AppContext';
import { getCurrentWeekdays, namesDays } from '../../helpers/getCurrentWeekdays';
import { DayObject } from '../../interfaces/interfaces';
import { CallendarWeekday } from '../../components/CallendarWeekday/CallendarWeekday';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';

export const screenWidth = Dimensions.get('window').width;

export const ReportScreen = () => {
  const [weekDays, setWeekDays] = useState<DayObject[]>([]);
  const [selectedDay, setSelectedDay] = useState<DayObject | undefined>();
  const [nutritionalData, setNutritionalData] = useState(null);
  const [currStatistics, setCurrStatistics] = useState(null);
  const { appState: { userData: {userKey} } } = useContext(AppContext);

  useEffect(() => {
    setWeekDays( getCurrentWeekdays(namesDays, setSelectedDay));
    getNutritionalContributionData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getNutritionalContributionData();
    }, [])
  );

  useEffect( () => {
    if (nutritionalData) filterNutritionalDataByDate();
  }, [selectedDay, nutritionalData]);

  const getNutritionalContributionData = async () => {
    try {
      const snapshot = await firestore()
        .collection('nutritionalContribution')
        .where('userKey', '==', userKey)
        .get();

      if (!snapshot.empty) {
        const data = snapshot.docs[0].data();
        setNutritionalData(data);
        console.log(data);
      }
    } catch (error) {
      console.error('Error fetching nutritional data:', error);
    }
  };

  const filterNutritionalDataByDate = () => {
    const currSelectedDate = `${selectedDay?.day}-${selectedDay?.month}-${selectedDay?.year}`;
    console.log(nutritionalData[currSelectedDate]);
    console.log(currSelectedDate);
    setCurrStatistics(nutritionalData[currSelectedDate]);
  };

  return (
    <View style={styles.container}>

      <View style={styles.topContainer} >
        <View style={styles.calendarContainer}>
          <Text style={styles.dayTitle}>
            <Text style={{ color: '#68A76E' }}>{`${namesDays[new Date().getDay()] === selectedDay?.completeDay ? 'Today' : selectedDay?.completeDay}`}</Text>
            <Text style={{ color: '#000000' }}>{`, ${selectedDay?.day} ${selectedDay?.month} ${selectedDay?.year}`}</Text>
          </Text>
          <FlatList
            data={weekDays}
            style={{ marginLeft: 25 }}
            renderItem={({ item }) => <CallendarWeekday days={item} setSelectedDay={setSelectedDay} weekdays={weekDays} setWeekDays={setWeekDays} />}
            horizontal
          />
        </View>
      </View>

      { !currStatistics ? (
        <Text>Loading</Text>
      ) : (
        <>
          <WhatsAppButton />

          <View style={styles.titleContainer} >
            <Title text='Nutrition intake' fontSize={25} />
          </View>

          <View style={styles.centerContainer} >
            <CircularProgressBar
              radius={screenWidth * 0.25}
              progress={(currStatistics?.currentCaloriesConsumed / nutritionalData?.caloriesPerDay) * 100}
              color="#58D164"
              caloriesConsumed={currStatistics?.currentCaloriesConsumed}
              caloriesPerDay={nutritionalData?.caloriesPerDay}
            />
            <View style={{flexDirection: 'column', marginLeft: 15}}>
              <Title text='Goal per day' fontSize={20} />
              <SubTitle text={`/  ${nutritionalData?.caloriesPerDay} cal`} color='gray' fontSize={18}/>
            </View>
          </View>
          <View style={styles.titleContainer2}>
            <Title text='Daily everage' fontSize={25} />
          </View>

          <View style={styles.bottomContainer}>
            <NutritionalChartProgress
              progressCarbs={(currStatistics?.currentCarbsConsumed * 1.0 / currStatistics?.totalCarbs)}
              progressProtein={(currStatistics?.currentProteinConsumed * 1.0 / currStatistics?.totalProtein)}
              progressFat={(currStatistics?.currentFatConsumed * 1.0 / currStatistics?.totalFat)}
              gramsCarbs={currStatistics?.currentCarbsConsumed}
              gramsProtein={currStatistics?.currentProteinConsumed}
              gramsFat={currStatistics?.currentFatConsumed}
              />
            </View>
        </>
      ) }
    </View>
  );
};
