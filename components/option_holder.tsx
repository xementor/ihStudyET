import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Option from "./option";
import color from '../colors';
import {ReactNode} from "react";

interface OptionsHolderProps {
    children: ReactNode
}

const OptionsHolder = (props: OptionsHolderProps) => {
  return (
    <View style={styles.container}>
        {props.children}
    </View>
  );
};

export default OptionsHolder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.surfaceBright,
    margin: 20,
    padding: 20,
    // flexDirection: "row",
    justifyContent: 'center',
    flexWrap: "wrap"
  }
});
