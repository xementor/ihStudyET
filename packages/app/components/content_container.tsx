import useTheme from 'app/design/theming/useTheme'
import * as React from 'react'
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
// import Markdown, { MarkdownProps } from 'react-native-markdown-display'
import EditAbleText from './EditableText'
import { useAppDispatch } from 'app/services/hooks/hook'
import { updateContentText } from 'app/store/editLesson'

// interface MarkdownWithChildrenProps extends MarkdownProps {
//   children: React.ReactNode
// }

// const MarkdownWithChildren: React.FC<MarkdownWithChildrenProps> = ({
//   children,
//   ...restProps
// }) => {
//   const content = React.Children.toArray(children)
//     .filter((child) => React.isValidElement(child))
//     .map((child) => (child as React.ReactElement).props.children)
//     .join('')

//   const markdownProps: MarkdownWithChildrenProps = {
//     children,
//     ...restProps,
//   }

//   return <Markdown {...markdownProps} />
// }

interface ContentContainerProps {
  varient?: 'primary' | 'default'
  content: string
  style?: StyleProp<ViewStyle>
  lid: number // lessonId
  cid: number // contentId
}

const ContentContainer = ({
  lid,
  cid,
  content,
  style,
  varient = 'default',
}: ContentContainerProps) => {
  const { colors: color } = useTheme()
  const [editable, seteditable] = React.useState(true)
  const dispatch = useAppDispatch()

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor:
        varient === 'default'
          ? color.surfaceContainerLow
          : color.primaryContainer,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    text: {
      color: varient === 'default' ? color.onSurface : color.onPrimary,
      lineHeight: 20,
    },
  })

  return (
    <View style={[styles.container, style]}>
      {/* <Text style={styles.text}>{content}</Text> */}
      {editable ? (
        <EditAbleText
          onSave={(des) =>
            dispatch(updateContentText({ lid: lid, cid: cid, content: des }))
          }
        >
          {content}
        </EditAbleText>
      ) : (
        // <MarkdownWithChildren>{content}</MarkdownWithChildren>
        <Text>{content}</Text>
      )}
    </View>
  )
}

export default ContentContainer
