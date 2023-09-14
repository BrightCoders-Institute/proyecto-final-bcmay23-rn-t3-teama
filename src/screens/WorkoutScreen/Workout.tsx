import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const WorkoutScreen = () => {
    const [exercises, setExercises] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://exercisedb.p.rapidapi.com/exercises';

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '7b3312ea82mshf4b3c1ed8aba512p100579jsna7827a0961e4',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                if (response.ok) {
                    const data = await response.json();

                    const limitedExercises = data.slice(0, 200);
                    setExercises(limitedExercises);
                    console.log(limitedExercises.length);
                } else {
                    console.error('Error al obtener datos de la API');
                }
            } catch (error) {
                console.error('Error de red:', error);
            }
        };

        fetchData();
    }, []);

    const categories = [...new Set(exercises.map((exercise) => exercise.target))];

    const filterExercisesByCategory = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
    };

    const filteredExercises = selectedCategory
        ? exercises.filter((exercise) => exercise.target === selectedCategory)
        : exercises;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>EJERCICIOS</Text>
            <FlatList
                data={categories}
                keyExtractor={(item) => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedCategory === item && styles.selectedButton,
                        ]}
                        onPress={() => filterExercisesByCategory(item)}
                    >
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )}
            />
            <FlatList
                data={filteredExercises}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.exerciseItem}>
                        <Text>Nombre: {item.name}</Text>
                        <Text style={{ color: 'red' }}>Target: {item.target}</Text>
                        <Text>Parte del cuerpo: {item.target}</Text>
                    </View>
                )}
                initialNumToRender={20} // Controla cuántos elementos se renderizan inicialmente
                removeClippedSubviews={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 16,
    },
    button: {
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
    },
    selectedButton: {
        backgroundColor: 'blue',
        borderColor: 'blue',
    },
    exerciseItem: {
        marginBottom: 16,
    },
});

export default WorkoutScreen;
