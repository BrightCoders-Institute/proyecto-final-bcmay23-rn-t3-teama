import React, { useState, useEffect } from 'react';
import { NutriTips } from '../../interfaces/interfaces';
import { View, TextInput, Button, FlatList, Image, Text } from 'react-native';
import { styles } from './styles';
import { FATSECRET_API_EXERCISES_KEY } from '@env';

  interface SearchBarProps {
      onSearch: (query: string) => void;
  }

  interface NutriTips {
    food_category_id: string;
    food_id: string;
    recipeImage: string;
    calories: number;
    carbohydrate: number;
    protein: number;
    id: string;
    name: string;
  }

const NutritionTips : React.FC<SearchBarProps> = ({ onSearch }) => {
  const [nutritips, setNutritips] = useState<NutriTips[]>([]);
  const [query, setQuery] = useState<string>('');


    return (
        <>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Find a food or meal..."
              value={query}
              onChangeText={(text) => setQuery(text)}
            />
            <Button title="Search" onPress={handleSearch} />
          </View>
          <View>
            <FlatList
              data={nutritips}
              keyExtractor={(item) => item.food_id.toString()}
              renderItem={({ item }) => (
                <View style={styles.foodItem}>
                  <Image source={{ uri: item.image_url }} style={styles.foodImage} />
                  <Text>{item.food_name}</Text>
                  <Text>Calories: {item.calories}</Text>
                 </View>
              )}
            />
      </View>
        </>
      );
};

export default NutritionTips;
