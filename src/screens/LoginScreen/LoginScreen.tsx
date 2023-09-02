import React, { useState, useEffect, useContext } from 'react';
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
import { StackScreenProps } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { AppContext, UserDataInfo } from '../../context/AppContext';
const successLoginModalImg = require('../../assets/img/successLoginModal.png');
const errorLoginModalImg = require('../../assets/img/errorLoginModal.png');

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  const {email, password, clientKey, onResetForm, onInputChange} = useForm({
    email: '',
    password: '',
    clientKey: '',
  });
  const {
    isEmailValid,
    isPasswordValid,
    isClientKeyValid,
    errorEmailText,
    errorPwText,
    errorClientKeyText,
    setIsEmailValid,
    setIsPasswordValid,
    setIsClientKeyValid,
    handleFieldValidation,
    setErrorEmailText,
    setErrorPwText,
    setErrorClientKeyText,
  } = useFieldValidation();
  const [isDisabledLogInBtn, setIsDisabledLogInBtn] = useState(true);
  const [isLoaderVisile, setIsLoaderVisile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { signIn, getContextUserData } = useContext( AppContext );
  const {height} = useWindowDimensions();

  useEffect(() => {
    handleDisabledLoginButton();
  }, [email, password, clientKey]);

  const handleInputChangeAndValidation = (name: string, value: any) => {
    onInputChange(name, value);
    handleFieldValidation(name, value);
  };

  const handleDisabledLoginButton = () => {
    if (
      isEmailValid &&
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

  const logInUser = () => {
    setIsLoaderVisile(true);
    setIsLoading(true);

    const userDataRef = firestore().collection('userData');
    userDataRef.where('userKey', '==', clientKey).get()
      .then(querySnapshot => {
        if (querySnapshot.empty) {
          console.log('La clave no existe');
          setIsLoading(false);
          setIsSuccess(false);

          setTimeout(() => {
            setIsLoaderVisile(false);
            setIsClientKeyValid(false);
            setErrorClientKeyText('Invalid client key');
          }, 3500);
          return;
        }
        const userDataInfo = querySnapshot.docs[0].data() as UserDataInfo;

        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('User account created & signed in!');
            setIsSuccess(true);
            signIn();
            getContextUserData(userDataInfo);
          })
          .then(() => {
            setIsLoading(false);
            setTimeout(() => {
              setIsLoaderVisile(false);
              onResetForm();
              navigation.navigate('BottomTab');
            }, 1500);
          })
          .catch(error => {
            setIsLoading(false);
            setIsSuccess(false);
            setTimeout(() => {
              setIsLoaderVisile(false);
              if (error.code === 'auth/user-not-found') {
                setIsEmailValid(false);
                setErrorEmailText('No account for this email');
              }

              if (error.code === 'auth/invalid-email') {
                setIsEmailValid(false);
                setErrorEmailText('The mail address is badly formatted');
              }

              if (error.code === 'auth/wrong-password') {
                setIsPasswordValid(false);
                setErrorPwText('Incorrect password.');
              }
              console.error(error);
            }, 3500);
          });
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error.message);
      });
  };

  return (
    <SafeAreaView>
      <LoadingModal
        isVisible={isLoaderVisile}
        isLoading={isLoading}
        successImageUrl={successLoginModalImg}
        errorImageUrl={errorLoginModalImg}
        title={isSuccess ? 'Logged Successfully' : 'Something went wrong'}
        subtitle={isSuccess ? 'Welcome to FoodieCare!' : 'Enter the correct keys or consult your nutritionist.'}
        isSuccessful={isSuccess}
      />
      <KeyboardAvoidingView behavior="height">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={{ height: height * 0.5 }}>
            <Image source={logo} style={[styles.logo, { height: height * 0.2 }]} resizeMode="contain" />
            <Image source={fruits} style={[styles.logo, { height: height * 0.28 }]} resizeMode="contain" />
          </View>

          <View style={{ height: height * 0.3, flexDirection: 'column', justifyContent: 'space-between' }}>
            <TextFieldForm
              placeholder="Email"
              inputValue={email}
              onInputChange={(value) => handleInputChangeAndValidation('email', value)}
              invalidText={errorEmailText}
              isInputValid={isEmailValid}
              setInputValid={setIsEmailValid}
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
            <ButtonPrimary title="LogIn" isDisabled={isDisabledLogInBtn} onPress={logInUser} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
