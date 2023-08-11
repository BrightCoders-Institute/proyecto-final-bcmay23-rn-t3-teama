import * as React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { NutritionalChartProps } from '../../interfaces/interfaces';
import style from './styles';

const NutritionalChart = ({progress, grams}: NutritionalChartProps) => {

  const backgroundMacros = {
    carb: '#56ADEC',
    protein: '#F3A939',
    fat: '#795DEA',
  };

  return (
    <SafeAreaView>
      <View style = {style.mainContainer}>
        <View style={style.container}>
          <ProgressBar
            color={backgroundMacros.carb}
            progress={progress}
            style={style.progressBar}
          />
          <View style={style.infoContainer}>
          <Text style={style.titlenutrition}>Carbs</Text>
              <Text>
                <Text style={[style.percentage, { color: backgroundMacros.carb }]}>{(progress * 100).toFixed(0)}%</Text>
                <Text style={style.gramsText}> ({grams})g</Text>
              </Text>
          </View>
        </View>

        <View style={style.container}>
        <ProgressBar
            color={backgroundMacros.protein}
            progress={progress}
            style={style.progressBar}
          />
          <View style={style.infoContainer}>
          <Text style={style.titlenutrition}>Protein</Text>
              <Text>
                <Text style={[style.percentage, { color: backgroundMacros.carb }]}>{(progress * 100).toFixed(0)}%</Text>
                <Text style={style.gramsText}> ({grams})g</Text>
              </Text>
          </View>
        </View>

        <View style={style.container}>
            <ProgressBar
                color={backgroundMacros.fat}
                progress={progress}
                style={style.progressBar}
              />
          <View style={style.infoContainer}>
            <Text style={style.titlenutrition}>Fat</Text>
              <Text>
                <Text style={[style.percentage, { color: backgroundMacros.carb }]}>{(progress * 100).toFixed(0)}%</Text>
                <Text style={style.gramsText}> ({grams})g</Text>
              </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NutritionalChart;
