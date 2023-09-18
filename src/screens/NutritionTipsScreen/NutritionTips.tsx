import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const NutritionTips : React.FC<SearchBarProps> = ({ onSearch }) => {

    const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    onSearch(query);
  };

    return (
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Find a food..."
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
        <Button title="Search" onPress={handleSearch} />
        </View>
      );
};

export default NutritionTips;
