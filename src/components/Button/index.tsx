import React from 'react';
import {Text, Pressable} from 'react-native';
import {styles} from './styles';
import { ButtonProps } from './props';

export default function Button({buttonContainerStyle, buttonTextStyle, onPress, title}: ButtonProps) {
  return (
    <Pressable style={[styles.button, buttonContainerStyle]} onPress={onPress}>
      <Text style={[styles.text, buttonTextStyle]}>{title}</Text>
    </Pressable>
  );
}
