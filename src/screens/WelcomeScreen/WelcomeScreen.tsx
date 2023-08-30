import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  useWindowDimensions,
} from 'react-native';
import {ButtonPrimary} from '../../components/ButtonPrimary/ButtonPrimary';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from './styles';
import { AppContext } from '../../context/AppContext';

const imgType = {
  Logo: require('../../assets/img/logo.png'),
  Nutritionist: require('../../assets/img/nutritionist.png'),
};

interface Props extends StackScreenProps<any, any> {}

const WelcomeScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  const { appState } = useContext( AppContext );

  return (
    <SafeAreaView style={{paddingHorizontal: '10%'}}>
      <Text>{ JSON.stringify( appState, null, 4 ) }</Text>
      <View style={{height: height * 0.27}}>
        <Image
          source={imgType.Logo}
          style={[styles.imageLogo, {height: height * 0.25}]}
          resizeMode="contain"
        />
        <Text style={styles.slogan}>
          Share progress, magnified results. Your nutritionist always with you
        </Text>
      </View>
      <View>
        <Image
          source={imgType.Nutritionist}
          style={[styles.imageLogo, {height: height * 0.42}]}
          resizeMode="contain"
        />
      </View>
      <View style={{height: height * 0.22, justifyContent: 'center'}}>
        <ButtonPrimary
          title="GET STARTED"
          onPress={() => navigation.navigate('Login')}
          isDisabled= {false}
        />
      </View>
      <View>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.textContainer}>
            By continuing you agree to our{' '}
            <Text style={styles.link}>Privacy Policy</Text> and{' '}
            <Text style={styles.link}>Terms & Conditions</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
