import useTheme from '@/constants/theming/useTheme';
import * as React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Markdown from 'react-native-markdown-display';
import EditAbleText from './EditableText';



interface ContentContainerProps {
  varient?: 'primary' | 'default',
  content: string,
  style?: StyleProp<ViewStyle>,
}

const ContentContainer = ({ content, style, varient = 'default' }: ContentContainerProps) => {

  const { colors: color } = useTheme()
  const [editable, seteditable] = React.useState(true)

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
      {/* <Text style={styles.text}>{content}</Text> */}
      {editable ?
        <EditAbleText>
          {content}
        </EditAbleText> :
        <Markdown>
          {content}
        </Markdown>
      }
    </View>
  );
};

export default ContentContainer;


