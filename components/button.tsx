import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import StyleSheet from 'react-native-media-query';
import { breakPoint } from '../constants/style';
import { ColorType } from '@/constants/theming/types';
import useTheme from '@/constants/theming/useTheme';

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
    <TouchableOpacity onPress={onPress}>
      {/* <View style={[styles.container, containerStyle]} dataSet={{ media: ids.container }}> */}
      <View
        style={styles.container}      >
        {/* <Text style={[styles.text, textStyle]}>{content}</Text> */}
        <Text
          style={{
            color: "red",
            fontSize: 16
          }}
        >{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const getStyle = (color: ColorType) => StyleSheet.create({
  container: {
    borderColor: color.outline,
    borderWidth: 1,
    height: 20,
    width: 135,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    [breakPoint]: {
      width: '100%',
      // backgroundColor: color.primaryContainer,
    },
  },

  text: {
    color: color.onSurface,
    fontSize: 16,
  }
});
