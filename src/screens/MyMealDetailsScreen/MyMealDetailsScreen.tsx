import React from 'react';
import { View } from 'react-native';
import { Title } from '../../components/Title/Title';
import { RecipeImg } from '../../components/RecipeImg/RecipeImg';
import { style } from './styles';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { StackScreenProps } from '@react-navigation/stack';
import MealInfoBadge from '../../components/MealInfoBadge/MealInfoBadge';
import NutritionalChart from '../../components/NutritionalChart/NutritionalChart';
import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

const MyMealDetailsScreen = ({navigation}: Props) => {

  const imgRecipe = {
    breakfast: require('../../assets/img/Breakfast.png'),
  };
  return (
    <View style={style.container}>
      <ScrollView>
        <RecipeImg imgSource={imgRecipe.breakfast}/>
        <View style={style.titleContainer}>
          <Title text="Fruit Bowl" fontSize={26}/>
          <SubTitle text="Bowl with fruits, some fruits and more fruits. You can add toppings" fontSize={17} color={'#A9A8A8'}/>
        </View>
        <View style={style.btnRecipe}>
          <ButtonSecondary title="View Recipe" onPress={() => navigation.navigate('Recipe')} color={'#795DEA'} />
        </View>
        <View>
          <MealInfoBadge minutes={'10-20'} level={'Easy'} kcal={'970'} />
        </View>
        <View style={style.percentagesTitle}>
            <Title text="Per Serving" fontSize={20}/>
            <NutritionalChart
              progressCarbs={0.5}
              progressProtein={0.3}
              progressFat={0.2}
              gramsCarbs={50}
              gramsProtein={32}
              gramsFat={12}
            />
        </View>
        <View style={style.btnCompleted}>
            <ButtonSecondary title={'Mark as completed'} onPress={() => navigation.navigate('Recipe')} color={'#58D164'}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyMealDetailsScreen;
