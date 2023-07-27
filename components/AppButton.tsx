import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import useTheme from '@/constants/theming/useTheme';
import { styled } from 'nativewind';


export enum ButtonType {
  primary = "primary",
  outline = "outline",
  surfaceContainer = "surface_container"
}

interface AppButtonProps {
  content: string;
  type?: "primary" | "outline" | "surface_container";
  onPress?: () => void;
}

const AppButton = ({ content, type, onPress }: AppButtonProps) => {
  const { colors: color } = useTheme()

  return (
    <TouchableOpacity
      className='w-full mb-5 py-2 flex flex-row justify-center rounded-md'
      style={{ backgroundColor: color.onBackground }}
      onPress={onPress}
    >
      <Text className='text-lg' style={{ color: color.background }}>{content}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

