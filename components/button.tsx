import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'dripsy';
import color from '../colors';

import StyleSheet from 'react-native-media-query';
import { breakPoint } from '../const/style';

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
  let containerStyle;
  let textStyle;
  if (type == ButtonType.primary) {
    containerStyle = { "backgroundColor": color.primary }
    textStyle = { "color": color.onPrimary }

  }

  return (
    <TouchableOpacity onPress={onPress}>
      {/* <View style={[styles.container, containerStyle]} dataSet={{ media: ids.container }}> */}
      <View
        sx={{
          borderColor: "$outline",
          borderWidth: 1,
          height: 20,
          width: 135,
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
          padding: 15,
          backgroundColor: "$background"
        }}
      >
        {/* <Text style={[styles.text, textStyle]}>{content}</Text> */}
        <Text
          sx={{
            color: "red",
            fontSize: 16
          }}
        >{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const { ids, styles } = StyleSheet.create({
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
