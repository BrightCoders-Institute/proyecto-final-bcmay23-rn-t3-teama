import { ImageSourcePropType } from "react-native";
import { SubTitle } from '../components/SubTitle/SubTitle';

export interface LoadingModalProps {
    isLoading: boolean;
    isVisible: boolean;
    successImageUrl: ImageSourcePropType;
    errorImageUrl: ImageSourcePropType;
    title: string;
    subtitle: string;
    isSuccessful: boolean;
}

export interface SubTitleProps {
    text: string;
    fontSize?: number;
    color?: string;
  }

  export interface WellcomeProgressCardProps {
    title: string;
    onPress?: () => void;
    imgSource?: ImageSourcePropType;
  }

  export interface WellnesCardProps {
    title: string;
    onPress?: () => void;
    imgSource?: string;
    backgroundColor?: string;
  
  }
  export interface MyMealCardProps {
    title: string;
    caloriesRecomended: string;
    description: string;
    onPress?: () => void;
    imgSource?: ImageSourcePropType;
  }