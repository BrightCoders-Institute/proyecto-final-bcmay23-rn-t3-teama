import React, {useState} from 'react';
import {View, Text, TextInput, Keyboard, FlatList, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const APP_ID = '9692362d';
const APP_KEY = 'afea0c5cbfb14f7bd4712611a6f664c2	';

export const SearchFoodsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  async function searchForFood() {
    setSearchResults([]);
    setIsLoading(true);
    Keyboard.dismiss();
    try {
      const response = await fetch(
        `https://api.edamam.com/api/food-database/v2/parser?ingr=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );

      if (!response.ok) {
        throw new Error(`No se pudo completar la solicitud. Código de estado: ${response.status}`);
      }

      const data = await response.json();

      setSearchResults(data.hints);
      console.log(data);
    } catch (error) {
      console.error('Error al buscar alimentos:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={{marginBottom: 120}}>
      {/* <Text style={styles2.intructions}>Ingresa una food que quieras saber su aporte calórico.</Text> */}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Coca cola, burger king, etc."
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
        <TouchableOpacity style={styles.button} onPress={searchForFood}>
          <View style={styles.buttonContent}>
            <Icon
              style={styles.buttonText}
              name="search"
            />
          </View>
        </TouchableOpacity>
      </View>

      { isLoading ? (
        <ActivityIndicator style={{marginTop: '50%'}} size={70} color="#7B5FEC" />
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item, idx) => (`${item.food.foodId}-${idx}`)}
          renderItem={({ item }) => (
            <View style={styles.cardsContainer}>
              <TouchableOpacity
                style={styles.foodItem}
                // onPress={ () => navigation.navigate('Food Details', {item})}
              >
                <View style={styles.itemImageContainer}>
                  <Image
                    style={styles.itemImage}
                    source={{
                      uri: item.food.image || 'https://www.idsplus.net/wp-content/uploads/default-placeholder.png',
                    }}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={styles.foodTitle}>{item.food.label}</Text>
                  <View style={styles.foodTextContainer}>
                    <Text style={styles.foodText}>{`${item.food.nutrients.ENERC_KCAL.toFixed(0)} cal`}</Text>
                    <Icon
                      color="#FF8787"
                      size={20}
                      name="flame"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      ) }
    </View>
  );
};

