import React from 'react'
// import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet } from 'react-native'
import { useAppDispatch, useAppSelector } from 'app/services/hooks/hook'
import { hideSheet } from '../store/contentsBottomSheet'
import { SafeAreaProvider } from 'react-native-safe-area-context'

type BottomSheetComponentProps = {}

const ContentsBottomSheet: React.FunctionComponent<
  BottomSheetComponentProps
> = () => {
  const isVisible = useAppSelector((state) => state.contentSheet)
  const dispatch = useAppDispatch()
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => dispatch(hideSheet()),
    },
  ]

  let handleBackdropPress = () => {
    dispatch(hideSheet())
  }

  return (
    <SafeAreaProvider>
      {/* <BottomSheet modalProps={{}} isVisible={isVisible} onBackdropPress={handleBackdropPress}>
                {list.map((l, i) => (
                    <ListItem
                        key={i}
                        containerStyle={l.containerStyle}
                        onPress={l.onPress}
                    >
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet> */}
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
})

export default ContentsBottomSheet
