import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {SubTitle} from '../../components/SubTitle/SubTitle';
import {Title} from '../../components/Title/Title';
import {WellcomeAvatar} from '../../components/WellcomeAvatar/WellcomeAvatar';
import {NutritionInfoProps} from '../../interfaces/interfaces';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const iconType = {
  weightScale: require('../../assets/img/scale-sharp.png'),
  calendar: require('../../assets/img/calendar.png'),
  man: require('../../assets/img/man.png'),
};

const NUTRITION_COUNSELLING_DATA: NutritionInfoProps = {
  nutritionist: 'Dr. Aimep3 Fischer',
  date: 'Wed, Aug 26, 2023',
  time: '5:40 PM',
  location: 'Residencial Esmeralda, 28017 Colima, Col.',
  price: '600.00',
};

const MyInfoScreen = ({}: NutritionInfoProps) => {
  return (
    <View style={{flex: 1, paddingHorizontal: '5%', justifyContent: 'space-around'}}>
      <View style={[styles.mainContainer, {flex: 0.38, backgroundColor: 'orange'}]}>
        <View style={styles.clientKey}>
          <Text style={styles.keyText}>Client Key: 2840389</Text>
        </View>
        <View style={styles.patientName}>
          <Title text="Patient: Jonh Needham" fontSize={20} />
        </View>
        <View style={styles.container}>
          <View style={styles.generalInfo}>
            <View style={styles.recordMeasures}>
              <Title text={'120.20'} fontSize={19} />
            </View>
            <SubTitle text={'(kg)'} fontSize={17} color={'black'} />
            <SubTitle text={'weight'} fontSize={16} />
          </View>
          <View style={styles.generalInfo}>
            <WellcomeAvatar size={110} />
          </View>
          <View style={styles.generalInfo}>
            <View style={styles.recordMeasures}>
              <Title text={'182'} fontSize={19} />
            </View>
            <SubTitle text={'(cm)'} fontSize={17} color={'black'} />
            <SubTitle text={'height'} fontSize={16} />
          </View>
        </View>
      </View>


      <View style={[{flex: 0.42, backgroundColor: 'red'}]}>
        <View style={styles.titleCards}>
          <Title text={'Monthly Metrics'} fontSize={18} />
        </View>
        <View style={styles.metricsContainer}>
          <View style={styles.column}>
            <View style={styles.containerImc}>
              <Image source={iconType.weightScale} style={styles.smallIcons} />
              <View style={styles.imcContainer}>
                <Title text={'IMC'} fontSize={17} color={'#939191'} />
                <Title text={'29.40'} fontSize={17} />
              </View>
            </View>
            <View style={[styles.containerImc, {marginBottom: 0}]}>
              <Image source={iconType.calendar} style={styles.smallIcons} />
              <View style={styles.ageContainer}>
                <Title text={'Age'} fontSize={17} color={'#939191'} />
                <Title text={'28 years'} fontSize={17} />
              </View>
            </View>
          </View>

          <View style={styles.singleViewContainer}>
            <View style={styles.singleViewContent}>
              <View style={styles.metricscontainer}>
                <View style={styles.metrics}>
                  <Title text={'Waist'} fontSize={17} color={'#939191'} />
                  <Title text={'70.50 cm'} fontSize={16} />
                </View>
                <View style={styles.metrics}>
                  <Title text={'Hips'} fontSize={17} color={'#939191'} />
                  <Title text={'100.50 cm'} fontSize={16} />
                </View>
                <View style={styles.metrics}>
                  <Title text={'Bust'} fontSize={17} color={'#939191'} />
                  <Title text={'110.20 cm'} fontSize={16} />
                </View>
              </View>
              <View style={styles.imageContainer}>
                <Image source={iconType.man} style={styles.bodyIcon} />
                {/* <Icon name={'man'} size={145} color="orange" style={styles.bodyIcon} /> */}
              </View>
            </View>
          </View>
        </View>
      </View>


      <View style={{padding: 15, flex: 0.20, backgroundColor: 'green'}}>
        <Text
          style={{
            color: '#010101',
            fontSize: 18,
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          Nutrition Counselling
        </Text>
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
            <View style={styles.section}>
              <Title text="Date" color="#A69C9C" fontSize={13} />
              <SubTitle
                text={`${NUTRITION_COUNSELLING_DATA.date},`}
                color="#000000"
                fontSize={12}
              />
              <SubTitle
                text={NUTRITION_COUNSELLING_DATA.time}
                color="#000000"
                fontSize={12}
              />
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
