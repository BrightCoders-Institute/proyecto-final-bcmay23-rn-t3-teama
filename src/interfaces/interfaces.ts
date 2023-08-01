import { ImageSourcePropType } from "react-native";

export interface LoadingModalProps {
    isLoading: boolean;
    isVisible: boolean;
    successImageUrl: ImageSourcePropType;
    errorImageUrl: ImageSourcePropType;
    title: string;
    subtitle: string;
    isSuccessful: boolean;
}