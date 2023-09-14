import React, {useContext, useState} from 'react';
import { Dimensions, View, Text, FlatList } from 'react-native';
import { NutritionalChartProgress } from '../../components/NutritionalChartProgress/NutritionalChartProgress';
import { CircularProgressBar } from '../../components/CircularProgressBar/CircularProgressBar';
import { styles } from './styles';
import { Title } from '../../components/Title/Title';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { WhatsAppButton } from '../../components/WhatsAppButton/WhatsAppButton';
import { AppContext } from '../../context/AppContext';
import { namesDays } from '../../helpers/getCurrentWeekdays';
import { DayObject } from '../../interfaces/interfaces';
import { CallendarWeekday } from '../../components/CallendarWeekday/CallendarWeekday';
import firestore from '@react-native-firebase/firestore';

export const screenWidth = Dimensions.get('window').width;

export const ReportScreen = () => {
  const [weekDays, setWeekDays] = useState<DayObject[]>([]);
  const [selectedDay, setSelectedDay] = useState<DayObject | undefined>();
  const { appState } = useContext(AppContext);

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

      <WhatsAppButton />

      <View style={styles.titleContainer} >
        <Title text='Nutrition intake' fontSize={25} />
      </View>

      <View style={styles.centerContainer} >
        <CircularProgressBar  radius={screenWidth * 0.25}  progress={(appState.consumedCalories / appState.caloriesPerDay) * 100} color="#58D164" />
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Title text='Goal per day' fontSize={20} />
          <SubTitle text={`/  ${appState.caloriesPerDay} cal`} color='gray' fontSize={18}/>
        </View>
      </View>
      <View style={styles.titleContainer2}>
        <Title text='Daily everage' fontSize={25} />
      </View>

      <View style={styles.bottomContainer}>
        <NutritionalChartProgress
          progressCarbs={0.5}
          progressProtein={0.3}
          progressFat={0.2}
          gramsCarbs={50}
          gramsProtein={50}
          gramsFat={50}
          />
        </View>
    </View>
  );
};