import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { View } from 'react-native';
import { Title } from '../../components/Title/Title';
import { RecipeImg } from '../../components/RecipeImg/RecipeImg';
import { style } from './styles';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { StackScreenProps } from '@react-navigation/stack';
import MealInfoBadge from '../../components/MealInfoBadge/MealInfoBadge';
import NutritionalChart from '../../components/NutritionalChart/NutritionalChart';
import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import { RouteProp } from '@react-navigation/native';

const successCompletedModalImg = require('../../assets/img/successDoctorModal.png');

interface Props extends StackScreenProps<any, any> {
  route: RouteProp<any, any>;
};


const MyMealDetailsScreen = ({navigation, route}: Props) => {
  
  const { toggleCardDisable } = useContext(AppContext);
  
  const [isModalVisible, setModalVisible] = useState(false);

  const handleMarkCompleted = () => {

    if ( route && route.params ) { 
      const { title } = route.params; 

      switch (title) {
        case 'Breakfast':
          toggleCardDisable('Breakfast', true);
          break;
        case 'Lunch':
          toggleCardDisable('Lunch', true);
          break;
        case 'Snack':
          toggleCardDisable('Snack', true);
          break;
        case 'Dinner':
          toggleCardDisable('Dinner', true);
          break;
        default:
          break;
      }
      setModalVisible(true);
      setTimeout(() => {
        navigation.navigate('MyMealsScreen');
      }, 1500);
    }
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
        title="Well done"
        subtitle="Check the report section to know your progress"
        isSuccessful={true}
        onClose={closeModal}
      />
      <RecipeImg imgSource={imgRecipe.breakfast}/>

      <View style={style.titleContainer}>
        <View style={style.title}>
          <Title text="Fruit Bowl" fontSize={26}/>
        </View>
        <View style={style.subtitle}>
          <SubTitle text="Bowl with fruits, some fruits and more fruits. You can add toppings" fontSize={17} color={'#615f5f'}/>
        </View>
      </View>

      <View style={style.btnRecipe}>
        <ButtonSecondary title="View Recipe" onPress={() => navigation.navigate('Recipe')} color={'#795DEA'} />
      </View>
      <MealInfoBadge minutes={'10-20'} level={'Easy'} kcal={'970'} />
      <View style={style.perServingTitle}>
        <Title text="Per Serving" fontSize={20}/>
      </View>
      <NutritionalChart
        progressCarbs={0.5}
        progressProtein={0.3}
        progressFat={0.2}
        gramsCarbs={50}
        gramsProtein={32}
        gramsFat={12}
      />
      <ButtonSecondary title={'Mark as completed'} onPress={handleMarkCompleted} color={'#58D164'}/>
    </View>
  );
};

export default MyMealDetailsScreen;
