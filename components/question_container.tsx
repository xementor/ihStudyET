import * as React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import color from '../colors';

interface QuestionContainerProps {
    varient?: string,
    content: string,
    style?: StyleProp<ViewStyle>,
}

const Question_container = ({ content, style }: QuestionContainerProps) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{content}</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: color.surfaceContainerLow, // colors.primaryContainer
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        alignItems: 'center'
    },
    text: {
        color: color.primary,
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default Question_container;
