import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title } from '../../components/Title/Title';
import { SubTitle } from '../../components/SubTitle/SubTitle';

interface NutritionCounsellingInfo {
    nutritionist: string;
    location: string;
    date: string;
    time: string;
    price: string;
}

const NUTRITION_COUNSELLING_DATA: NutritionCounsellingInfo = {
    nutritionist: 'Dr. Aimep3 Fischer',
    date: 'Wed, Aug 26, 2023',
    time: '5:40 PM',
    location: 'Residencial Esmeralda, 28017 Colima, Col.',
    price: '600.00',
};

const MyInfoScreen: React.FC = () => {
    return (
        <View style={{padding: 15, marginTop: 440}}>
            <Text style={{color: '#010101', fontSize: 18, marginBottom: 10, fontWeight: 'bold'}}>Nutrition Counselling</Text>
            {/* <Title text='Nutrition Counselling' color='#010101' fontSize={18} /> */}
            <View style={styles.counsellingContainer}>
                <View style={styles.topSection}>
                    <View style={styles.section}>
                        <Title text="Nutritionist" color="#A69C9C" fontSize={13} />
                        <SubTitle text={NUTRITION_COUNSELLING_DATA.nutritionist} color="#000000" fontSize={12} />
                    </View>
                    <View style={styles.section}>
                        <Title text="Location" color="#A69C9C" fontSize={13} />
                        <SubTitle text={NUTRITION_COUNSELLING_DATA.location} color="#000000" fontSize={12} />
                    </View>
                </View>
                <View style={styles.middleSection}>
                    <View style={styles.section}>
                        <Title text="Date" color="#A69C9C" fontSize={13} />
                        <SubTitle text={`${NUTRITION_COUNSELLING_DATA.date},`} color="#000000" fontSize={12} />
                        <SubTitle text={NUTRITION_COUNSELLING_DATA.time} color="#000000" fontSize={12} />
                    </View>
                    <View style={styles.section}>
                        <Title text="Price" color="#A69C9C" fontSize={13} />
                        <SubTitle text={`$${NUTRITION_COUNSELLING_DATA.price} MXN`} color="#000000" fontSize={12} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    counsellingContainer: {
        backgroundColor: '#FFFCFC',
        borderRadius: 13,
        paddingHorizontal: 20,
        paddingVertical: 15,
        elevation: 10,
        shadowColor: 'black',
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    middleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    section: {
        flex: 1,
        marginRight: 10,
    },
});

export default MyInfoScreen;
