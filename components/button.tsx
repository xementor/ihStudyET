import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import StyleSheet from 'react-native-media-query';
import { breakPoint } from '../constants/style';
import { ColorType } from '@/constants/theming/types';
import useTheme from '@/constants/theming/useTheme';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity)

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

  let containerStyle;
  let textStyle;
  if (type == ButtonType.primary) {
    containerStyle = { "backgroundColor": color.primary }
    textStyle = { "color": color.onPrimary }

  }
  const { styles } = getStyle(color)

  return (
    <TouchableOpacity
      className='w-full mb-5 py-2 flex flex-row justify-center rounded-md'
      style={{ backgroundColor: color.onBackground }}
      onPress={onPress}
    >
      <Text className='text-lg' style={{ color: color.background }}>Continue</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const getStyle = (color: ColorType) => StyleSheet.create({
  container: {
    // borderColor: color.outline,
    backgroundColor: color.onBackground,
    borderWidth: 1,
    height: 40,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
