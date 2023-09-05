import firestore from '@react-native-firebase/firestore';

export const sendToFirestore = async (dataToSend: any) => {
    try {
        const db = firestore();

        const appointmentsRef = db.collection('appointments');

        await appointmentsRef.add(dataToSend);

        console.log('Datos enviados con éxito');
        return true;
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        return false;
    }
};




