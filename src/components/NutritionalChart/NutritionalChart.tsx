import * as React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import style from './styles';

const NutritionalChart = () => {

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
            progress={0.5}
            style={style.progressBar}
          />
          <View style={style.infoContainer}>
          <Text style={style.titlenutrition}>Carbs</Text>
              <Text>
                <Text style={[style.percentage, { color: backgroundMacros.carb }]}>55%</Text>
                <Text style={style.gramsText}> (10g)</Text>
              </Text>
          </View>
        </View>

        <View style={style.container}>
        <ProgressBar
            color={backgroundMacros.protein}
            progress={0.3}
            style={style.progressBar}
          />
          <View style={style.infoContainer}>
          <Text style={style.titlenutrition}>Protein</Text>
              <Text>
                <Text style={[style.percentage, { color: backgroundMacros.protein }]}>30%</Text>
                <Text style={style.gramsText}> (20g)</Text>
              </Text>
          </View>
        </View>

        <View style={style.container}>
            <ProgressBar
                color={backgroundMacros.fat}
                progress={0.1}
                style={style.progressBar}
              />
          <View style={style.infoContainer}>
            <Text style={style.titlenutrition}>Fat</Text>
              <Text>
                <Text style={[style.percentage, { color: backgroundMacros.fat }]}>10%</Text>
                <Text style={style.gramsText}> (10g)</Text>
              </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NutritionalChart;
