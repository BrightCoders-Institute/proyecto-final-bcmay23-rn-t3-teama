import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { useRoute } from '@react-navigation/native';
import { RecipeImg } from '../../components/RecipeImg/RecipeImg';
import { Title } from '../../components/Title/Title';
import PieChart from 'react-native-pie-chart';

export const SearchFoodsDetailsScreen = () => {
    const route = useRoute();
    const { item } = route.params;
    const nutrients = item.food.nutrients;
    console.log(item.food.nutrients);

    const totalGrams = nutrients.CHOCDF + nutrients.FAT + nutrients.PROCNT;

    const carbPercentage = ((nutrients.CHOCDF / totalGrams) * 100);
    const fatPercentage = ((nutrients.FAT / totalGrams) * 100);
    const proteinPercentage = ((nutrients.PROCNT / totalGrams) * 100);

    return (
        <View style={styles.container}>
            <RecipeImg imgSource={item.food.image || 'https://www.idsplus.net/wp-content/uploads/default-placeholder.png'} />
            <View style={styles.titleContainer}>
                <View style={styles.title}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black', textAlign:'center'}}>{item.food.label}</Text>
                    <Text style={{fontSize: 17, marginTop: 20}}>Serving Size:</Text>
                    <Text style={{fontSize: 17, marginTop: 5, fontWeight: 'bold', }}>100 Gram</Text>
                </View>
            </View>
            <View style={styles.nutritionalContainer}>
                <View style={styles.chartContainer}>
                    <PieChart
                        widthAndHeight={200}
                        series={[fatPercentage.toString(), proteinPercentage.toString(), carbPercentage.toString()]}
                        sliceColor={['#F14647', '#6ACC00', '#FFBE61']}
                        coverRadius={0.80}
                    />
                    <View style={{right: '65%', height: '30%', justifyContent: 'center', alignItems:'center', position: 'relative'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${nutrients.ENERC_KCAL}`}</Text>
                        <Text style={{fontSize: 20}}>Calories</Text>
                    </View>
                    <View style={{flexDirection: 'column', marginLeft: '-5%', gap: 5}}>
                        <View style={styles.nutritionPercentageText}>
                            <View style={[styles.miniCircle, {backgroundColor: '#F14647'}]} />
                            <Text style={{fontWeight: 'bold'}}>{`${fatPercentage.toFixed(0)}%`}</Text>
                            <Text>{`Fat`}</Text>
                        </View>
                        <View style={styles.nutritionPercentageText}>
                            <View style={[styles.miniCircle, {backgroundColor: '#FFBE61'}]} />
                            <Text style={{fontWeight: 'bold'}}>{`${carbPercentage.toFixed(0)}%`}</Text>
                            <Text>{`Carbs`}</Text>
                        </View>
                        <View style={styles.nutritionPercentageText}>
                            <View style={[styles.miniCircle, {backgroundColor: '#6ACC00'}]} />
                            <Text style={{fontWeight: 'bold'}}>{`${proteinPercentage.toFixed(0)}%`}</Text>
                            <Text>{`Protein`}</Text>
                        </View>
                    </View>
                </View>
                {/* <View style={styles.tableContainer}></View> */}
            </View>
        </View>
    );
};
