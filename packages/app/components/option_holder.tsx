import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Option from './option'
import { ReactNode } from 'react'
import useTheme from 'app/design/theming/useTheme'

interface OptionsHolderProps {
  children: ReactNode
}

const OptionsHolder = (props: OptionsHolderProps) => {
  const { colors: color } = useTheme()
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color.surfaceBright,
      margin: 20,
      padding: 20,
      // flexDirection: "row",
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  })
  return <View style={styles.container}>{props.children}</View>
}

export default OptionsHolder
