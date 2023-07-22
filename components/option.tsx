import * as React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import color from '../colors';

interface OptionProps {
  option: string,
  variant?: "default" | "selected",
  handleSelection: () => void;
}

const Option = ({ option, variant = "default",handleSelection }: OptionProps) => {
  const styles = variant == "default" ? DefaultStyles : SelectedStyles;

  const handlePress = () => {
    handleSelection()
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Text style={styles.text}>{option}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};


const DefaultStyles = StyleSheet.create({
  container: {
    borderColor: color.outline,
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    flex:1,
    flexWrap: "wrap"


  },

  text: {
    flex: 1,
    color: color.onSurface,
    flexWrap: "wrap",
  }
});

const SelectedStyles = StyleSheet.create({
  container: {
    borderColor: color.outline,
    backgroundColor: color.secondary,
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 10,
    marginBottom: 10,
  },

  text: {
    color: color.onSecondary,
  }
})



export default Option;