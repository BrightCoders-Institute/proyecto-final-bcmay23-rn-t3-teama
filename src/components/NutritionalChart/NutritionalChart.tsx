import * as React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import style from './styles';

const NutritionalChart = () => {
  return (
    <SafeAreaView>
      <View style = {style.mainContainer}>
        <View style={style.container}>
          <ProgressBar
            color="#58D164"
            progress={0.5}
            style={style.progressBar}
          />
          <View style={style.infoContainer}>
            <Text style={style.titlenutrition}>CARBS</Text>
            <Text style={style.percentage}>50 % (20gr)</Text>
          </View>
        </View>

        <View style={style.container}>
        <ProgressBar
            color="#58D164"
            progress={0.5}
            style={style.progressBar}
          />
          <View style={style.infoContainer}>
            <Text style={style.titlenutrition}>Protein</Text>
            <Text style={style.percentage}>40 % (20gr)</Text>
          </View>
        </View>

        <View style={style.container}>
            <ProgressBar
                color="#58D164"
                progress={0.5}
                style={style.progressBar}
              />
        <View style={style.infoContainer}>
            <Text style={style.titlenutrition}>Fat</Text>
            <Text style={style.percentage}>5 % (10gr)</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NutritionalChart;
