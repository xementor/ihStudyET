import * as React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import color from '../colors';

interface ContentContainerProps {
  varient?: 'primary' | 'default',
  content: string,
  style?: StyleProp<ViewStyle>,
}

const ContentContainer = ({ content, style, varient = 'default' }: ContentContainerProps) => {

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: varient === 'default' ? color.surfaceContainerLow : color.primaryContainer,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,

    },
    text: {
      color: varient === 'default' ? color.onSurface : color.onPrimary,
      lineHeight: 20,

    }
  });

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{content}</Text>
    </View>
  );


};

export default ContentContainer;


