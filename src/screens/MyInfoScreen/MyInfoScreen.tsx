import React from 'react';
import {View, Text, Image} from 'react-native';
import {SubTitle} from '../../components/SubTitle/SubTitle';
import {Title} from '../../components/Title/Title';
import {WellcomeAvatar} from '../../components/WellcomeAvatar/WellcomeAvatar';
import {NutritionInfoProps} from '../../interfaces/interfaces';
import {UserInfoProps} from '../../interfaces/interfaces';
import {styles} from './styles';

const iconType = {
  weightScale: require('../../assets/img/weight-scale.png'),
  calendar: require('../../assets/img/calendar2.png'),
  man: require('../../assets/img/man.png'),
};

const NUTRITION_COUNSELLING_DATA: NutritionInfoProps = {
  nutritionist: 'Dr. Aimep3 Fischer',
  date: 'Wed, Aug 26, 2023',
  time: '5:40 PM',
  location: 'Residencial Esmeralda, 28017 Colima, Col.',
  price: '600.00',
};

const USER_DATA: UserInfoProps = {
  userKey: '2840389',
  userName: 'Jonh',
  userLastName: 'Needham',
  age: 28,
  image: '',
  weight: 120.20,
  height: 182,
  bmi: 29.40,
  waist: 70.5,
  hips: 100.5,
  bust: 110.2,
  fatPercentage: 0,
  goal: '',
  caloriesPerDay: 0,
};

const MyInfoScreen = ( {}: NutritionInfoProps, {}: UserInfoProps ) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: '5%', justifyContent: 'space-around' }}>
      <View style={[styles.mainContainer, { flex: 0.35 }]}>
        <View style={styles.clientKey}>
          <Text style={styles.keyText}>{`Client Key: ${USER_DATA.userKey}`}</Text>
        </View>
        <View style={styles.patientName}>
          <Title text={`${USER_DATA.userName} ${USER_DATA.userLastName}`} fontSize={20} />
        </View>
        <View style={styles.container}>
          <View style={styles.generalInfo}>
            <View style={styles.recordMeasures}>
              <Title text={USER_DATA.weight.toFixed(2)} fontSize={19} />
            </View>
            <SubTitle text={'(kg)'} fontSize={17} color={'black'} />
            <SubTitle text={'weight'} fontSize={16} />
          </View>
          <View style={styles.generalInfo}>
            <WellcomeAvatar size={110} />
          </View>
          <View style={styles.generalInfo}>
            <View style={styles.recordMeasures}>
              <Title text={USER_DATA.height.toFixed(1)} fontSize={19} />
            </View>
            <SubTitle text={'(cm)'} fontSize={17} color={'black'} />
            <SubTitle text={'height'} fontSize={16} />
          </View>
        </View>
      </View>

      <View style={[{ flex: 0.40 }]}>
        <View style={styles.titleCards}>
          <Title text={'Monthly Metrics'} fontSize={18} />
        </View>
        <View style={styles.metricsContainer}>
          <View style={styles.column}>
            <View style={styles.containerImc}>
              <Image source={iconType.weightScale} style={styles.smallIcons} />
              <View style={styles.imcContainer}>
                <Title text={'BMI'} fontSize={17} color={'#939191'} />
                <Title text={USER_DATA.bmi.toFixed(2)} fontSize={17} />
              </View>
            </View>
            <View style={styles.containerImc}>
              <Image source={iconType.calendar} style={styles.smallIcons} />
              <View style={styles.ageContainer}>
                <Title text={'Age'} fontSize={17} color={'#939191'} />
                <Title text={`${USER_DATA.age} years`} fontSize={17} />
              </View>
            </View>
          </View>
          <View style={styles.singleViewContainer}>
            <View style={styles.singleViewContent}>
              <View style={styles.metricscontainer}>
                <View style={styles.metrics}>
                  <Title text={'Waist'} fontSize={17} color={'#939191'} />
                  <Title text={`${USER_DATA.waist} cm`} fontSize={16} />
                </View>
                <View style={styles.metrics}>
                  <Title text={'Hips'} fontSize={17} color={'#939191'} />
                  <Title text={`${USER_DATA.hips} cm`} fontSize={16} />
                </View>
                <View style={styles.metrics}>
                  <Title text={'Bust'} fontSize={17} color={'#939191'} />
                  <Title text={`${USER_DATA.bust} cm`} fontSize={16} />
                </View>
              </View>
              <View style={styles.imageContainer}>
                <Image source={iconType.man} style={styles.bodyIcon} />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.25 }}>
        <Text style={styles.nutritionTitle}>Nutrition Counselling</Text>
        <View style={styles.counsellingContainer}>
          <View style={styles.topSection}>
            <View style={styles.section}>
              <Title text="Nutritionist" color="#A69C9C" fontSize={13} />
              <SubTitle
                text={NUTRITION_COUNSELLING_DATA.nutritionist}
                color="#000000"
                fontSize={12}
              />
            </View>
            <View style={styles.section}>
              <Title text="Location" color="#A69C9C" fontSize={13} />
              <SubTitle
                text={NUTRITION_COUNSELLING_DATA.location}
                color="#000000"
                fontSize={12}
              />
            </View>
          </View>
          <View style={styles.middleSection}>
            <View style={[styles.section, {top: '-5%'}]}>
              <Title text="Date" color="#A69C9C" fontSize={13} />
              <SubTitle
                text={`${NUTRITION_COUNSELLING_DATA.date},`}
                color="#000000"
                fontSize={12}
                />
              <Text style={{color:"#000000", fontSize: 12, marginTop: '-5%'}}>{NUTRITION_COUNSELLING_DATA.time}</Text>
            </View>
            <View style={styles.section}>
              <Title text="Price" color="#A69C9C" fontSize={13} />
              <SubTitle
                text={`$${NUTRITION_COUNSELLING_DATA.price} MXN`}
                color="#000000"
                fontSize={12}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyInfoScreen;
