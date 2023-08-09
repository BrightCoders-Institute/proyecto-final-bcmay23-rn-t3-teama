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

export interface RecipeImgProps {
  imgSource: ImageSourcePropType;
}

export interface NutritionalChartProps {
  progress: number;
  grams: number;
}
