import React, { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import { styles } from './styles';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const NutritionTips : React.FC<SearchBarProps> = ({ onSearch }) => {

    const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    onSearch(query);
  };

  const url = 'https://api.spoonacular.com/recipes/complexSearch';

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
            <FlatList />
          </View>
        </>
      );
};

export default NutritionTips;
