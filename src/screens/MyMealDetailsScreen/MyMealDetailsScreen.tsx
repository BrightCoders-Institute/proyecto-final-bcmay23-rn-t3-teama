import React, {useContext, useState} from 'react';
import {AppContext} from '../../context/AppContext';
import {View} from 'react-native';
import {Title} from '../../components/Title/Title';
import {RecipeImg} from '../../components/RecipeImg/RecipeImg';
import {style} from './styles';
import {SubTitle} from '../../components/SubTitle/SubTitle';
import {StackScreenProps} from '@react-navigation/stack';
import MealInfoBadge from '../../components/MealInfoBadge/MealInfoBadge';
import NutritionalChart from '../../components/NutritionalChart/NutritionalChart';
import {ButtonSecondary} from '../../components/ButtonSecondary/ButtonSecondary';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import {RouteProp} from '@react-navigation/native';

const successCompletedModalImg = require('../../assets/img/successDoctorModal.png');

interface Props extends StackScreenProps<any, any> {
  route: RouteProp<any, any>;
}

const MyMealDetailsScreen = ({navigation, route}: Props) => {
  const {toggleCardDisable} = useContext(AppContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const { mealData } = route.params;

  const handleMarkCompleted = () => {
    setModalVisible(true);
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
        title={'Mark as completed'}
        onPress={handleMarkCompleted}
        color={'#58D164'}
      />
    </View>
  );
};

export default MyMealDetailsScreen;
