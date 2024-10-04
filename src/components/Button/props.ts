import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ButtonProps {
  buttonContainerStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  title?: string;
}
