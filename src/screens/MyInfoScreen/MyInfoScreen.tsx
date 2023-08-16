import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { Title } from '../../components/Title/Title';
import { WellcomeAvatar } from '../../components/WellcomeAvatar/WellcomeAvatar';
import { styles } from './styles';


export const MyInfoScreen = () => {
  return (
    <ScrollView>
    <View style={styles.mainContainer}>
        <View style={styles.clientKey}>
          <Text style={styles.keyText}>Client Key: 2840389</Text>
        </View>
        <View style={styles.patientName}>
          <Title text="Patient Jonh Needham" fontSize={20}/>
        </View>
        <View style={styles.container}>
          <View style={styles.generalInfo}>
            <View style={styles.recordMeasures}>
              <Title text="120.20" fontSize={20}/>
            </View>
              <SubTitle text="(kg)" fontSize={18} color={'black'}/>
              <SubTitle text={'weight'} fontSize={18} />
          </View>
          <View style={styles.generalInfo}>
            <WellcomeAvatar size={100} />
          </View>
          <View style={styles.generalInfo}>
            <View style={styles.recordMeasures}>
             <Title text="182" fontSize={20}/>
            </View>
            <SubTitle text="(cm)" fontSize={18} color={'black'}/>
            <SubTitle text={'hight'} fontSize={18}/>
          </View>
        </View>
    </View>
        <View style={styles.metricsTitle}>
          <Title text={'Monthly Metrics'} fontSize={20}/>
        </View>
        <View style={styles.metricsContainer}>
          <View style={styles.column}>
            <View style={styles.containerImc}>
              <Title text={'IMC'} fontSize={17} color={'#939191'}/>
              <Title text={'29.40'} fontSize={17}/>
            </View>
            <View style={[styles.containerImc, {marginBottom: 0}]}>
              <Title text={'Age'} fontSize={17} color={'#939191'}/>
              <Title text={'28 years'} fontSize={17}/>
            </View>
          </View>
            <View style={styles.singleViewContainer}>
            <View style={styles.metrics}>
              <Title text={'Wais'} fontSize={17} color={'#939191'}/>
              <Title text={'70.50'} fontSize={17}/>
            </View>
            <View style={styles.metrics}>
              <Title text={'Hips'} fontSize={17} color={'#939191'}/>
              <Title text={'100.50'} fontSize={17}/>
            </View>
            <View style={styles.metrics}>
              <Title text={'Bust'} fontSize={17} color={'#939191'}/>
              <Title text={'110.20'} fontSize={17}/>
            </View>
            </View>
        </View>
    </ScrollView>
  );
};

export default MyInfoScreen;
