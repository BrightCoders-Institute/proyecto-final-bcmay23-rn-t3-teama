import { ImageSourcePropType } from 'react-native';

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

export interface MealInfoBadgeProps {
  minutes: string;
  level: string;
  kcal: string;
}

export interface NutritionalChartProps {
  progress?: number;
  grams: number;
  progressCarbs: number;
  progressProtein: number;
  progressFat: number;
}
export interface RecipeImgProps {
  imgSource: ImageSourcePropType;
}

export interface DayObject {
  isSelectedDay: boolean;
  weekName: string;
  completeDay: string;
  day: number;
  month: string;
  year: number;
}
