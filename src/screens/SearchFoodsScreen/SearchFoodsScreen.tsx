import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
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
    try {
      const response = await fetch(
        `https://api.edamam.com/api/food-database/v2/parser?ingr=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );

      if (!response.ok) {
        throw new Error(`No se pudo completar la solicitud. Código de estado: ${response.status}`);
      }

      const data = await response.json();

      // Procesar la respuesta aquí y mostrar la información en tu aplicación
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
      <View style={styles2.container}>
        <TextInput
          style={styles2.input}
          placeholder="Coca cola, burger king, etc."
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
        <TouchableOpacity style={styles2.button} onPress={searchForFood}>
          <View style={styles2.buttonContent}>
            <Icon
              style={styles2.buttonText}
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
              <TouchableOpacity style={styles.foodItem} onPress={ () => navigation.navigate('Food Details', {item})}>
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

const styles2 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginVertical: 25,
  },
  intructions: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 25,
  },
  input: {
    flex: 1,
    height: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  button: {
    backgroundColor: '#7B5FEC', // Color de fondo del botón
    borderRadius: 15,
    // paddingVertical: 10,

    paddingHorizontal: 20,
    height: '100%',
    // display: 'flex',
    flexDirection: 'row',
  },
  buttonContent: {
    // alignItems: 'center', // Centra verticalmente dentro del botón
    justifyContent: 'center',
    // paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  buttonText: {
    color: '#fff', // Color del texto del botón
    fontSize: 20,
    fontWeight: 'bold',
    // justifyContent: 'center',
    // alignSelf: 'center',
    // textAlign: 'center',
    // textAlignVertical: 'center',
    // flex: 1,
  },
});
