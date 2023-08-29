import { useEffect, useRef, useState } from 'react'
import {
  View,
  ScrollView,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native'

import ContentContainer from 'app/components/content_container'
import AppButton from 'app/components/AppButton'

import { Content, ContentType } from 'app/services/storage/model'
import { addContent, incrementIndex, resetIndex } from 'app/store/sublesson'
import { useAppSelector, useAppDispatch } from 'app/services/hooks/hook'
import { incrementLessonIdx } from 'app/store/lessons'
import ProgressHeader from 'app/components/ProgressHeader'
import { withExpoSnack } from 'nativewind'
import CardQuiz from 'app/components/CardQuiz'
import Prompt from 'app/components/Prompt'
import EditAbleText from 'app/components/EditableText'
import { updateLessonTitle } from 'app/store/editLesson'
import AddContent from 'app/components/AddContent'

export function ContentScreen() {
  const [showButton, setShowButton] = useState(true)
  const [showHint, setHint] = useState(true)
  const scrollViewRef = useRef<ScrollView>(null)
  const { index } = useAppSelector((state) => state.subLesson)
  const { lessonIdx } = useAppSelector((state) => state.lesson)
  const dispatch = useAppDispatch()

  const { lessons, edible } = useAppSelector((state) => state.editLesson)
  const onePageLesson = lessons[lessonIdx]

  useEffect(() => {
    return () => {
      if (onePageLesson.contents[index].type === ContentType.info) {
        const newContent = onePageLesson.contents[index]
        dispatch(addContent(newContent))
      }
    }
  }, [index])

  useEffect(() => {
    return () => {
      // console.log("lessonIdx", lessonIdx)
      // dispatch(changeLesson(lessonIdx))
      dispatch(resetIndex())
    }
  }, [lessonIdx])

  function toggleHint() {
    setHint(!showHint)
  }

  function onPress() {
    if (edible) {
      if (lessonIdx >= lessons.length - 1) {
        return
      }
      dispatch(incrementLessonIdx())
      return
    }

    if (index >= onePageLesson.contents.length - 1) {
      // Handle lesson progression
      if (lessonIdx >= lessons.length - 1) {
        return
      }
      dispatch(incrementLessonIdx())
      return
    }
    dispatch(incrementIndex())

    scrollViewRef.current?.scrollToEnd({ animated: true })
    toggleHint()
  }

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
    const isHide =
      contentOffset.y + layoutMeasurement.height > contentSize.height - 100
    setShowButton(isHide)
  }

  function closeHint(): void {
    setHint(false)
  }

  return (
    <>
      <ScrollView
        className=" bg-slate-100 pb-80"
        onScroll={handleScroll}
        ref={scrollViewRef}
        scrollEventThrottle={20}
      >
        <View className="absolute top-0 z-10 h-3 w-full ">
          <ProgressHeader />
        </View>
        <View className="flex-1 items-center px-2">
          <View className="h-full w-full sm:w-2/3 md:w-2/3 lg:w-1/2">
            {/* {showHint && <Hint close={closeHint} />} */}

            <View className="mb-3 ml-2 mt-20">
              <EditAbleText
                className="text-2xl font-bold"
                onSave={(data) =>
                  dispatch(updateLessonTitle({ lid: lessonIdx, title: data }))
                }
              >
                {onePageLesson.title}
              </EditAbleText>
            </View>

            {/* <YoutubeVideo /> */}
            {edible
              ? onePageLesson.contents.map((item, index) => {
                  return renderItem(item, index)
                })
              : onePageLesson.contents.slice(0, index).map((item, index) => {
                  return renderItem(item, index)
                })}

            <AddContent lid={lessonIdx} />

            {/* {
              <View className="hidden px-2  sm:flex">
                <AppButton content="Continue" onPress={onPress} />
              </View>
            } */}
          </View>
        </View>
      </ScrollView>
      {showButton && (
        <View className="absolute bottom-2 w-full px-2 sm:hidden">
          <AppButton content="Continue" onPress={onPress} />
        </View>
      )}
    </>
  )

  function renderItem(item: Content, cid: number) {
    if (item.type == ContentType.info) {
      return (
        <ContentContainer
          content={item.content.text}
          key={index}
          cid={index}
          lid={lessonIdx}
        />
      )
    } else if (item.type == ContentType.question) {
      return <CardQuiz question={item.content} cid={cid} lid={lessonIdx} />
    } else if (item.type == ContentType.prompt) {
      return <Prompt prompt={item.content} ids={{ cid, lid: lessonIdx }} />
    } else return <Text>no content</Text>
  }
}
