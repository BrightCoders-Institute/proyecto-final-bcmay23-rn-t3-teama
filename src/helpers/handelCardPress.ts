import { StackScreenProps } from "@react-navigation/stack";
import { appInitialState } from "../context/AppContext";
import { Alert } from "react-native";


interface Props extends StackScreenProps<any, any> { }

export const handelCardPress = ( navigation: Props['navigation'], title: string) => {
    if (!appInitialState.isCardDisabled[ title ]) {
      navigation.navigate('Meals Details', { title });
    }else {
      Alert.alert(
        'Meal Completed',
        'This meal is already complet, want to see the recipe?',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'destructive',
          },
          {text: 'OK', onPress: () => navigation.navigate('Recipe')},
        ]
      );
    }
  }