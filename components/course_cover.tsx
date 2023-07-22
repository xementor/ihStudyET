import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import color from '../colors';

interface CourseCoverProps { }

const CourseCover = (props: CourseCoverProps) => {
  return (
    <Pressable style={styles.pressable}>
      <View style={styles.container}>
        <Image
          source={require('../assets/favicon.png')}
          style={{ width: 120, height: 120, }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 18, color: color.onBackground }}>Solving Equation</Text>
      </View>
    </Pressable>
  );
};

export default CourseCover;

const styles = StyleSheet.create({
  pressable: {
    width: 176,
    height: 224,
    backgroundColor: color.surfaceContainerLow,
    borderRadius: 10,

  },
  container: {
    width: 176,
    height: 176,
    borderRadius: 10,
    backgroundColor: color.surfaceContainerHighest,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});
