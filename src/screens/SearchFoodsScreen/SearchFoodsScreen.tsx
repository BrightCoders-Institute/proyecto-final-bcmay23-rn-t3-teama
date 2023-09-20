import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';

const API_KEY = '59bb167eb7784f9ba9c94f5aa13cad73';
const BASE_URL = 'https://api.spoonacular.com/food/ingredients/search';

export const SearchFoodsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleIngredientSearch = () => {
        fetch(`${BASE_URL}?apiKey=${API_KEY}&query=${searchQuery}`)
          .then((response) => response.json())
          .then((data) => {
            setSearchResults(data);
            // console.log(data.searchResults[3].results);
            // console.log(data.searchResults[5]);
            console.log(data.searchResults);
          })
          .catch((error) => {
            console.error('Error al buscar ingredientes:', error);
          });
    };

    return (
        <View>
          <TextInput
            placeholder="Ingresa un ingrediente"
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
          />
          <Button title="Buscar" onPress={handleIngredientSearch} />
          <FlatList
            data={searchResults}
            keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </View>
    );
};
