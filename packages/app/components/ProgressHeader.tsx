import { TouchableWithoutFeedback, View, Text, Pressable } from 'react-native'
import { withExpoSnack, styled } from 'nativewind'
// import { HeroOutline, HeroSolid } from '@nandorojo/heroicons'

import { cLesson1, cLesson2, cLesson3 } from 'app/services/storage/c'
import { useAppSelector } from 'app/services/hooks/hook'
import useTheme from 'app/design/theming/useTheme'
import clsx from 'clsx'
import { showSheet } from 'app/store/contentsBottomSheet'
import { ColorType } from 'app/design/theming/types'
// import { Link } from 'expo-router'

interface IconButtonProps {
  name: string
  web?: boolean
  style?: string
}

function ProgessHeader() {
  const { colors } = useTheme()
  const { lessonIdx } = useAppSelector((state) => state.lesson)
  const { index: subLessonIdx } = useAppSelector((state) => state.subLesson)
  const { lessons } = useAppSelector((state) => state.editLesson)

  const handlePress = () => {
    dispatch(showSheet())
    // dispatch(setLessonIndex({lessonIdx: index}))
    // dispatch(resetIndex())
  }

  const IconButton: React.FC<IconButtonProps> = ({
    name,
    web = false,
    style,
  }) => {
    const className = clsx(
      'p-2',
      web && 'hidden android:hidden ios:hidden md:flex',
      style
    )
    return (
      // <Link href="/" asChild>
      // <HeroOutline.Ticket className={className} />
      <Text>Icon</Text>
      // {/* </Link> */}
    )
  }

  return (
    <View
      className="web:pt-0 flex h-20 flex-row items-center justify-between pt-3"
      style={{ backgroundColor: colors.surfaceContainerLowest }}
    >
      <View className="ml-1 lg:ml-6">
        <IconButton name="close" />
      </View>

      <View className="flex w-2/3 flex-row items-center justify-between lg:w-2/3">
        {/* <View className='flex flex-row items-center'> */}

        <IconButton name="chevron-left" web={true} />
        <View className="flex flex-1 flex-row">
          {lessons.map((subLesson, index) => {
            const width = (subLesson.contents.length / 20) * 100
            const progressPercentage = Math.floor(
              ((subLessonIdx + 1) / subLesson.contents.length) * 100
            )
            return (
              <TouchableWithoutFeedback key={index}>
                <View
                  className="h-3 flex-shrink rounded-md border-2 border-slate-200 bg-slate-50"
                  style={[
                    {
                      width: `${width}%`,
                      marginRight: index == lessons.length - 1 ? 0 : 2,
                    },
                    index < lessonIdx
                      ? {
                          backgroundColor: colors.primary,
                        }
                      : null,
                  ]}
                >
                  <View
                    style={[
                      index === lessonIdx
                        ? {
                            width: `${progressPercentage}%`,
                            height: '100%',
                            backgroundColor: colors.secondary,
                            borderRadius: 6,
                          }
                        : null,
                    ]}
                  />
                </View>
              </TouchableWithoutFeedback>
            )
          })}
        </View>
        <IconButton name="chevron-right" web={true} />
      </View>

      <ScoreComponent color={colors.onSurface} />
    </View>
  )
}

export default withExpoSnack(ProgessHeader)

interface ScoreComponentProps {
  color: string
}
export const ScoreComponent: React.FC<ScoreComponentProps> = ({ color }) => {
  return (
    <View className="ml-3 flex flex-row items-center">
      <Text className=" text-base" style={{ color: color }}>
        0
      </Text>
      <View className="mr-1 lg:mr-6">
        {/* <IconButton name="bolt" /> */}
        {/* <HeroOutline.Bolt /> */}
      </View>
    </View>
  )
}

function dispatch(arg0: {
  payload: undefined
  type: 'bottomSheetOpen/showSheet'
}) {
  throw new Error('Function not implemented.')
}
