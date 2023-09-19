import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
import { Excercise } from '../../interfaces/interfaces';
import { RAPID_API_EXERCISES_KEY, RAPID_API_EXERCISES_HOST } from '@env';

const WorkoutScreen = () => {
    const [exercises, setExercises] = useState<Excercise[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const url = 'https://exercisedb.p.rapidapi.com/exercises';

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': RAPID_API_EXERCISES_KEY,
                    'X-RapidAPI-Host': RAPID_API_EXERCISES_HOST,
                },
            };

            try {
                const response = await fetch(url, options);
                if (response.ok) {
                    const data = await response.json();

                    const limitedExercises = data.slice(0, 200);
                    setExercises(limitedExercises);
                } else {
                    console.error('Error al obtener datos de la API', response.status);
                }
            } catch (error) {
                console.error('Error de red:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const categories = [...new Set(exercises.map((exercise) => exercise.target))];

    const filterExercisesByCategory = (category: string) => {
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
        <>
            <Image
                style={styles.backgroungImage}
                source={require('../../assets/img/exercise.png')}
            />
            <View style={styles.container}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#F3A939" style={styles.loadingIndicator} />
                ) : (
                    <>
                        <FlatList
                            style={styles.categoriesFlatlist}
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
                                    <Text style={[
                                        styles.buttonText,
                                        selectedCategory === item && styles.selectedButtonText,
                                    ]}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <FlatList
                            data={filteredExercises}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.exerciseItem}>
                                    <View style={styles.itemImageContainer}>
                                        <FastImage
                                            style={styles.itemImage}
                                            source={{
                                                uri: item.gifUrl,
                                                priority: FastImage.priority.normal,
                                            }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.itemInfo}>
                                        <Text style={styles.exerciseText}>{item.name}</Text>
                                        <Text style={styles.targetText}>Target: {item.target}</Text>
                                        <Text style={styles.targetText}>Equipment: {item.equipment}</Text>
                                    </View>
                                </View>
                            )
                            }
                            initialNumToRender={20}
                            removeClippedSubviews={true}
                        />

                    </>
                )}
            </View >
        </>
    );
};

export default WorkoutScreen;
