import { ImageSourcePropType } from 'react-native';

export interface ButtonProps {
  title: string;
  onPress?: () => void;
  isDisabled: boolean | true;
}

export interface ButtonSecondaryProps {
  title: string;
  onPress?: () => void;
  color?: string;
  fontSize?: number;
}

export interface DayObjectProps {
  isSelectedDay: boolean;
  weekName: string;
  completeDay: string;
  day: number;
  month: string;
  year: number;
  namesDays: Array<string>;
}

export interface CallendarWeekdayProps {
  days: DayObjectProps;
  setSelectedDay: React.Dispatch<React.SetStateAction<DayObjectProps | undefined>>;
  weekdays: DayObjectProps[];
  setWeekDays: React.Dispatch<React.SetStateAction<DayObjectProps[]>>;
}

export interface LoadingModalProps {
  isLoading: boolean;
  isVisible: boolean;
  successImageUrl: ImageSourcePropType;
  errorImageUrl?: ImageSourcePropType;
  title: string;
  subtitle: string;
  isSuccessful: boolean;
  onClose?: () => void;
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
  imgSource?: ImageSourcePropType;
  backgroundColor?: string;
}

export interface MyMealCardProps {
  title: string;
  caloriesRecomended: string;
  description: string;
  onPress?: () => void;
  imgSource?: ImageSourcePropType;
  disable: boolean;
}

export interface MealInfoBadgeProps {
  minutes: string;
  level: string;
  kcal: string;
}

export interface NutritionalChartProps {
  progressCarbs: number;
  progressProtein: number;
  progressFat: number;
  gramsCarbs: number;
  gramsProtein: number;
  gramsFat: number;
}

export interface RecipeImgProps {
  imgSource: ImageSourcePropType;
}

export interface CircularProgressBarProps {
  radius: number;
  progress: number;
  color: string;
}

export interface wellcomeAvatarProps {
  size: number;
}

export interface NutritionInfoProps {
  nutritionist: string;
  location: string;
  date: string;
  time: string;
  price: string;
}

export interface UserInfoProps {
  userKey: string;
  userName: string;
  userLastName: string;
  age: number;
  image: string;
  weight: number;
  height: number;
  bmi: number;
  waist: number;
  hips: number;
  bust: number;
  fatPercentage: number;
  goal: string;
  caloriesPerDay: number;
}

export interface RatingStarProps {
  filled: 'full' | 'half' | 'empty';
  size: number;
}

export interface TextFieldFormProps {
  placeholder: string;
  inputValue: string;
  onInputChange: (value: string) => void;
  invalidText: string;
  isInputValid?: boolean;
  setInputValid?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

export interface NutritionistInfo {
  name: string;
  major: string;
  cityAndCountry: string;
  biography: string;
  rating: string;
}