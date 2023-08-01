import React from 'react';
import {
  SafeAreaView,
  View,
  useWindowDimensions,
  Image,
} from 'react-native';
import {styles} from './styles';
import logo from '../../assets/img/logo.png';
import fruits from '../../assets/img/fruits.png';
import {ButtonPrimary} from '../../components/ButtonPrimary/ButtonPrimary';
import { useForm } from '../../hooks/useForm';
import { TextFieldForm } from '../../components/TextFieldForm/TextFieldForm';

const LoginScreen = () => {
  const {name, password, clientKey, onResetForm, onInputChange} = useForm({
    name: '',
    password: '',
    clientKey: '',
  });
  const {height} = useWindowDimensions();

  return (
    <SafeAreaView>
      <View style={{height: height * 0.5}}>
        <Image
          source={logo}
          style={[styles.logo, {height: height * 0.2}]}
          resizeMode="contain"
        />
        <Image
          source={fruits}
          style={[styles.logo, {height: height * 0.28}]}
          resizeMode="contain"
        />
      </View>

      <View style={{height: height * 0.3, flexDirection: 'column', justifyContent: 'space-between'}}>
      <TextFieldForm
          placeholder="Name *"
          inputValue={name}
          onInputChange={(name: string, val: string) => onInputChange(name, val)}
        />
        <TextFieldForm
          placeholder="Password *"
          inputValue={password}
          onInputChange={(name: string, val: string) => onInputChange(name, val)}
        />
        <TextFieldForm
          placeholder="Client Key *"
          inputValue={clientKey}
          onInputChange={(name: number, val: string) => onInputChange(name, val)}
        />
      </View>
      <View style={{height: height * 0.2, justifyContent: 'center'}}>
        <ButtonPrimary title='LogIn' onPress={() => console.log('Loggin in ...')} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
