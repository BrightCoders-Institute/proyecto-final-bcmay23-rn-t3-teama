import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  useWindowDimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { styles } from './styles';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import logo from '../../assets/img/logo.png';
import fruits from '../../assets/img/fruits.png';
import { ButtonPrimary } from '../../components/ButtonPrimary/ButtonPrimary';
import { useForm } from '../../hooks/useForm';
import { TextFieldForm } from '../../components/TextFieldForm/TextFieldForm';
import { useFieldValidation } from '../../hooks/useFieldValidation';

const LoginScreen = () => {
  const successLoginModalImg = require('../../assets/img/successLoginModal.png');
  const errorLoginModalImg = require('../../assets/img/errorLoginModal.png');
  const {name, password, clientKey, onResetForm, onInputChange} = useForm({
    name: '',
    password: '',
    clientKey: '',
  });
  const {
    isNameValid,
    isPasswordValid,
    isClientKeyValid,
    errorNameText,
    errorPwText,
    errorClientKeyText,
    setIsNameValid,
    setIsPasswordValid,
    setIsClientKeyValid,
    handleFieldValidation,
    setErrorNameText,
    setErrorPwText,
    setErrorClientKeyText,
  } = useFieldValidation();
  const [isDisabledLogInBtn, setIsDisabledLogInBtn] = useState(true);
  const {height} = useWindowDimensions();

  const handleInputChangeAndValidation = (name: string, value: any) => {
    onInputChange(name, value);
    handleFieldValidation(name, value);
  };

  const handleDisabledLoginButton = () => {
    console.log('Loggin in ...');
    if (
      isNameValid &&
      name.trim() !== '' &&
      isPasswordValid &&
      password.trim() !== '' &&
      isClientKeyValid &&
      clientKey.trim() !== ''
    ) {
      setIsDisabledLogInBtn(false);
      return;
    }
    setIsDisabledLogInBtn(true);
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="height">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={{ height: height * 0.5 }}>
            <Image source={logo} style={[styles.logo, { height: height * 0.2 }]} resizeMode="contain" />
            <Image source={fruits} style={[styles.logo, { height: height * 0.28 }]} resizeMode="contain" />
          </View>

          <View style={{ height: height * 0.3, flexDirection: 'column', justifyContent: 'space-between' }}>
            <TextFieldForm
              placeholder="Name"
              inputValue={name}
              onInputChange={(value) => handleInputChangeAndValidation('name', value)}
              invalidText={errorNameText}
              isInputValid={isNameValid}
              setInputValid={setIsNameValid}
            />
            <TextFieldForm
              placeholder="Password"
              inputValue={password}
              onInputChange={(value) => handleInputChangeAndValidation('password', value)}
              invalidText={errorPwText}
              isInputValid={isPasswordValid}
              setInputValid={setIsPasswordValid}
            />
            <TextFieldForm
              placeholder="Client Key"
              inputValue={clientKey}
              onInputChange={(value) => handleInputChangeAndValidation('clientKey', value)}
              invalidText={errorClientKeyText}
              isInputValid={isClientKeyValid}
              setInputValid={setIsClientKeyValid}
            />
          </View>

          <View style={{ height: height * 0.2, justifyContent: 'center' }}>
            <ButtonPrimary title="LogIn" isValid={false} onPress={handleDisabledLoginButton} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
