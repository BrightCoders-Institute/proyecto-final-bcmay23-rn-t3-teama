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
              <Text>IMC</Text>
            </View>
            <View style={[styles.containerImc, {marginBottom: 0}]}>
            <Text>AGE</Text>
            </View>
          </View>
            <View style={styles.singleViewContainer}>
            <Text>WAIS</Text>
            </View>
        </View>
    </ScrollView>
  );
};

export default MyInfoScreen;
