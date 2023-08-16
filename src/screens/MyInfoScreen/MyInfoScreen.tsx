import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { Title } from '../../components/Title/Title';
import { WellcomeAvatar } from '../../components/WellcomeAvatar/WellcomeAvatar';
import { styles } from './styles';


export const MyInfoScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.clientKey}>
          <Text style={styles.keyText}>Client Key: 2840389</Text>
        </View>
        <View style={styles.patientName}>
          <Title text="Patient Jonh Needham" fontSize={20}/>
        </View>
        <View style={styles.container}>
          <View style={styles.weighInfo}>
            <Title text="120.20" fontSize={20}/>
            <SubTitle text="(kg)" fontSize={18} color={'black'}/>
            <SubTitle text={'weight'} fontSize={18} />
          </View>
          <View style={styles.weighInfo}>
            <WellcomeAvatar size={100} />
          </View>
          <View style={styles.weighInfo}>
            <Title text="182" fontSize={20}/>
            <SubTitle text="(cm)" fontSize={18} color={'black'}/>
            <SubTitle text={'hight'} fontSize={18}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyInfoScreen;
