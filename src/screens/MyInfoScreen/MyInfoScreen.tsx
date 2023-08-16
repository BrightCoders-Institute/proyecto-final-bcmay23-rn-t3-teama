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
          <Title text='Patient Jonh Needham' fontSize={20}/>
        </View>
        <View>
          <View style={styles.weighInfo}>
            <Title text="120.20" fontSize={20}/>
            <SubTitle text="(kg)" fontSize={20} color={'black'}/>
          </View>
          <View>
            <WellcomeAvatar />
          </View>
          <View style={styles.weighInfo}>
            <Title text="120.20" fontSize={20}/>
            <SubTitle text="(kg)" fontSize={20} color={'black'}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyInfoScreen;
