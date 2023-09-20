import React, { useState, useContext } from 'react';
import { View, Alert } from 'react-native';
import { Title } from '../../components/Title/Title';
import { RecipeImg } from '../../components/RecipeImg/RecipeImg';
import { style } from './styles';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { StackScreenProps } from '@react-navigation/stack';
import MealInfoBadge from '../../components/MealInfoBadge/MealInfoBadge';
import NutritionalChart from '../../components/NutritionalChart/NutritionalChart';
import {ButtonSecondary} from '../../components/ButtonSecondary/ButtonSecondary';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import { AppContext } from '../../context/AppContext';

const successCompletedModalImg = require('../../assets/img/successDoctorModal.png');

interface Props extends StackScreenProps<any, any> {
  route: RouteProp<any, any>;
}

const MyMealDetailsScreen = ({navigation}: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const { appState: { userKey } } = useContext( AppContext );
  const { mealData, mealId, currSelectedDate } = route.params;

  const handleMarkCompleted = () => {
    if (mealId[0].isCompleted) {
      Alert.alert(
        'Meal Completed',
        'This meal is already complete, do you want to go change it to incompleted?',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'destructive',
          },
          { text: 'OK', onPress: () => updateIsCompletedValue(false) },
        ]
      );
      return;
    }
    updateIsCompletedValue(true);
  };

  const updateIsCompletedValue = (isCompleteValue) => {
    setModalVisible(true);

    const mealType = mealData.type.trim();
    const recipeBookRef = firestore().collection('recipeBook');
    const docRef = recipeBookRef.doc(mealId[0].recipeBook_id);

    docRef
      .get()
      .then(docSnapshot => {
        const data = docSnapshot.data();
        const index = data[mealType].findIndex(item => item.id === mealId[0].id);
        data[mealType][index].isCompleted = isCompleteValue;

        const updateData = {};
        updateData[mealType] = data[mealType];

        return docRef.update(updateData);
      })
      .then(() => {
        console.log('Campo isCompleted actualizado con éxito');
        updateNutritionalContribution(isCompleteValue);
      })
      .then(() => {
        setTimeout(() => {
          navigation.navigate('MyMealsScreen');
        }, 1500);
        // setModalVisible(true);
      })
      .catch(error => {
        console.error('Error al actualizar el campo isCompleted:', error);
      });
  };

  const updateNutritionalContribution = (isCompleteValue) => {
    const nutritionalContributionRef = firestore().collection('nutritionalContribution');

    nutritionalContributionRef
      .where('userKey', '==', userKey)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.error('No se encontró el documento de nutritionalContribution para el usuario.');
          return;
        }

        const docRef = querySnapshot.docs[0].ref;
        const data = querySnapshot.docs[0].data();

        const currentDayData = data[currSelectedDate] || {
          currentCaloriesConsumed: 0,
          currentCarbsConsumed: 0,
          currentFatConsumed: 0,
          currentProteinConsumed: 0,
          totalCarbs: 0,
          totalFat: 0,
          totalProtein: 0,
        };

        if (isCompleteValue) {
          currentDayData.currentCaloriesConsumed += mealData.calories;
          currentDayData.currentCarbsConsumed += mealData.carbohydrateGrams;
          currentDayData.currentFatConsumed += mealData.fatGrams;
          currentDayData.currentProteinConsumed += mealData.proteinGrams;
        } else {
          currentDayData.currentCaloriesConsumed -= mealData.calories;
          currentDayData.currentCarbsConsumed -= mealData.carbohydrateGrams;
          currentDayData.currentFatConsumed -= mealData.fatGrams;
          currentDayData.currentProteinConsumed -= mealData.proteinGrams;
        }

        const updateData = {
          [currSelectedDate]: currentDayData,
        };

        return docRef.update(updateData);
      })
      .then(() => {
        console.log('Actualización de nutritionalContribution exitosa.');
        setModalVisible(true);
      })
      .catch((error) => {
        console.error('Error al actualizar nutritionalContribution:', error);
      });
  };


  const closeModal = () => {
    setModalVisible(false);
  };

  const imgRecipe = {
    breakfast: require('../../assets/img/Breakfast.png'),
  };

  return (
    <View style={style.container}>
      <LoadingModal
        isVisible={isModalVisible}
        isLoading={false}
        successImageUrl={successCompletedModalImg}
        title="Updated data"
        subtitle="Check the report section to know your progress."
        isSuccessful={true}
        onClose={closeModal}
      />
      <RecipeImg imgSource={mealData?.image} />

      <View style={style.titleContainer}>
        <View style={style.title}>
          <Title text={mealData?.name} fontSize={26} />
        </View>
        <View style={style.subtitle}>
          <SubTitle
            text={mealData?.description}
            fontSize={17}
            color={'#615f5f'}
          />
        </View>
      </View>

      <View style={style.btnRecipe}>
        <ButtonSecondary
          title="View Recipe"
          onPress={() => navigation.navigate('Recipe', {mealData})}
          color={'#795DEA'}
        />
      </View>
      <MealInfoBadge
        minutes={mealData?.prepTime}
        level={mealData?.difficulty}
        kcal={mealData?.calories}
      />
      <View style={style.perServingTitle}>
        <Title text="Per Serving" fontSize={20} />
      </View>
      <NutritionalChart
        progressCarbs={mealData?.carbohydratePercentage}
        progressProtein={mealData?.proteinPercentage}
        progressFat={mealData?.fatPercentage}
        gramsCarbs={mealData?.carbohydrateGrams}
        gramsProtein={mealData?.proteinGrams}
        gramsFat={mealData?.fatGrams}
      />
      <ButtonSecondary
        title={`Mark as ${mealId[0].isCompleted ? 'incomplete' : 'completed'}`}
        onPress={handleMarkCompleted} color={mealId[0].isCompleted ? '#B9B9B9' : '#58D164'}
      />
    </View>
  );
};

export default MyMealDetailsScreen;
