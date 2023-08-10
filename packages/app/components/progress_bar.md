import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
TouchableHighlight,
TouchableWithoutFeedback,
View,
} from 'react-native'

import StyleSheet from 'react-native-media-query'

import { useState } from 'react'
import { Pressable } from 'react-native'
import { useAppDispatch, useAppSelector } from 'app/services/hooks/hook'
import { SubLesson } from 'app/services/storage/model'
import { showSheet } from '../store/contentsBottomSheet'

import { breakPoint } from '../constants/style'
import useTheme from 'app/design/theming/useTheme'
import { ColorType } from 'app/design/theming/types'

interface ProgressBarProps {
lessons: SubLesson[]
}

export default function ProgressBar({ lessons }: ProgressBarProps) {
const { colors: color } = useTheme()
const { styles, ids } = getStyles(color)

const { lessonIdx } = useAppSelector((state) => state.lesson)
const { index: subLessonIdx } = useAppSelector((state) => state.subLesson)

const [hovered, setHovered] = useState(false)
const [isHoveredLeft, setIsHoveredLeft] = useState(false)
const [isHoveredRight, setIsHoveredRight] = useState(false)

const dispatch = useAppDispatch()

const handlePress = () => {
dispatch(showSheet())
// dispatch(setLessonIndex({lessonIdx: index}))
// dispatch(resetIndex())
}
function ScoreComponent() {
return (
<View style={[styles.rightScore]}>
<Pressable style={styles.score}>
{/_ 0 _/}
<TouchableHighlight>
<MaterialCommunityIcons
              size={24}
              accessibilityHint="close"
              name="bolt"
              color={color.onSurface}
            />
</TouchableHighlight>
</Pressable>
</View>
)
}

return (
<View
style={[styles.container, { backgroundColor: color.onBackground }]}
dataSet={{ media: ids.container }} >
<View
style={[styles.leftCloseButton, hovered && styles.hovered]}
dataSet={{ media: ids.leftCloseButton }} >
<Pressable
onHoverIn={() => setHovered(true)}
onHoverOut={() => setHovered(false)} >
<TouchableHighlight onPress={() => console.log('hi')}>
<MaterialCommunityIcons
              size={24}
              accessibilityHint="close"
              name="close"
              color={color.onSurface}
            />
</TouchableHighlight>
</Pressable>
</View>

      <View
        style={styles.progressContainer}
        dataSet={{ media: ids.progressContainer }}
      >
        <Pressable
          onHoverIn={() => setIsHoveredLeft(true)}
          onHoverOut={() => setIsHoveredLeft(false)}
          dataSet={{ media: ids.noneDisplay }}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={30}
            color={color.onSurface}
            style={[{ marginRight: 20 }, isHoveredLeft && styles.hovered]}
          />
        </Pressable>
        <View style={styles.progress}>
          {lessons.map((subLesson, index) => {
            const progressPercentage = Math.floor(
              ((subLessonIdx + 1) / subLesson.contents.length) * 100
            )
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => handlePress()}
              >
                <View
                  style={[
                    styles.lessonProgress,
                    index === lessonIdx ? styles.selectedLesson : null,
                    index < lessonIdx
                      ? { backgroundColor: color.primary }
                      : null,
                  ]}
                >
                  <View
                    style={[
                      styles.contentProgress,
                      index === lessonIdx
                        ? { width: `${progressPercentage}%` }
                        : null,
                    ]}
                  />
                </View>
              </TouchableWithoutFeedback>
            )
          })}
        </View>
        <Pressable
          onHoverIn={() => setIsHoveredRight(true)}
          onHoverOut={() => setIsHoveredRight(false)}
          dataSet={{ media: ids.noneDisplay }}
        >
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color={color.onSurface}
            style={[{ marginLeft: 20 }, isHoveredRight && styles.hovered]}
          />
        </Pressable>
      </View>

      <ScoreComponent />
    </View>

)
}

function getStyles(color: ColorType) {
return StyleSheet.create({
container: {
width: '100%',
flexDirection: 'row',
alignItems: 'center',
// justifyContent: 'center',
justifyContent: 'space-between',
height: 60,
backgroundColor: color.surfaceContainer,
position: 'absolute',
top: 0,
zIndex: 1,
},

    progress: {
      flex: 1,
      height: 20,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    leftCloseButton: {
      color: color.onSurface,
      marginLeft: 25,
      // position: "absolute",
      left: 0,
      [breakPoint]: {
        // position: "relative",
        marginRight: 10,
        marginLeft: 10,
      },
    },

    lessonProgress: {
      backgroundColor: color.surfaceContainerLowest,
      height: 10,
      flex: 1,
      borderRadius: 10,
      margin: 3,
    },

    contentProgress: {
      backgroundColor: color.primary,
      flex: 1,
      width: 0,
      borderRadius: 10,
    },

    progressContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: 600,
      [breakPoint]: {
        maxWidth: 650,
      },
    },
    hovered: {
      backgroundColor: color.surfaceContainerHighest,
    },
    selectedLesson: {
      borderWidth: 1,
      borderColor: color.secondary,
      padding: 2,
    },

    noneDisplay: {
      [breakPoint]: {
        // display: "none",
      },
    },
    rightScore: {
      marginRight: 25,
      [breakPoint]: {
        marginRight: 10,
        marginLeft: 10,
      },
    },
    score: {
      flexDirection: 'row',
      alignItems: 'center',
      color: color.onBackground,
    },

})
}
