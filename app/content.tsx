import React, { useEffect, useRef, useState } from "react";
import { Text, View, FlatList, ScrollView, NativeSyntheticEvent, NativeScrollEvent, LayoutChangeEvent, Pressable, GestureResponderEvent } from "react-native";

import ContentContainer from "../components/content_container";
import AppButton from "../components/AppButton";

import { ContentType } from "../services/storage/model";
import { addInfo, incrementIndex, resetIndex } from "../store/sublesson";
import { useAppSelector, useAppDispatch } from "./hook";
import { incrementLessonIdx } from "../store/lessons";
import ProgressHeader, { lessons } from "@/components/ProgressHeader";
import { styled, withExpoSnack } from "nativewind";
import CardQuiz from "@/components/CardQuiz";
import { Hint } from "@/components/Hint";
import Prompt from "@/components/Prompt";
import YoutubeVideo from "@/components/YoutubeVideo";





function ContentScreen() {
  const [showButton, setShowButton] = useState(true);
  const [showHint, setHint] = useState(true)
  const scrollViewRef = useRef<ScrollView>(null);




  const { index } = useAppSelector((state) => state.subLesson);
  const { lessonIdx } = useAppSelector((state) => state.lesson);


  function toggleHint() {
    setHint(!showHint)
  }


  const onePageLesson = lessons[lessonIdx];

  const dispatch = useAppDispatch();
  function onPress() {
    if (index >= onePageLesson.contents.length - 1) {
      // Handle lesson progression
      if (lessonIdx >= lessons.length - 1) {
        return;
      }
      dispatch(incrementLessonIdx());
      return;
    }
    dispatch(incrementIndex());

    scrollViewRef.current?.scrollToEnd({ animated: true })
    toggleHint()
  }



  useEffect(() => {
    return () => {
      if (onePageLesson.contents[index].type === ContentType.info) {
        const newInfo = onePageLesson.contents[index].content;
        dispatch(addInfo(newInfo));
      }
    };
  }, [index]);

  useEffect(() => {
    return () => {
      dispatch(resetIndex());
    };
  }, [lessonIdx]);



  const copy = `
# h1 Heading 8-)

**This is some bold text!**

This is normal text
`;


  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isHide = (contentOffset.y + layoutMeasurement.height) > (contentSize.height - 100)
    setShowButton(isHide);
  };


  function closeHint(): void {
    setHint(false)
  }

  return (
    <ScrollView className=" pb-80 bg-slate-100"
      onScroll={handleScroll}
      ref={scrollViewRef}

    >

      <View className="absolute top-0 w-full h-3 z-10 ">
        <ProgressHeader />
      </View>
      <View className="flex-1 px-2 items-center">

        <View className="h-full w-full sm:w-2/3 md:w-2/3 lg:w-1/2">
          {showHint && <Hint close={closeHint} />}




          <View className="mt-20 mb-3 ml-2">
            <Text className="text-2xl font-bold">{onePageLesson.title}</Text>
          </View>

          <CardQuiz />
          <YoutubeVideo />



          {onePageLesson.contents.slice(0, index).map((item, index) => {
            return <ContentContainer content={item.content.text} key={index} />
          })}
          <Prompt />



          {showButton && <View className="absolute bottom-2 w-full px-2">
            <AppButton content="Continue" onPress={onPress} />
          </View>
          }

        </View>


      </View >
    </ScrollView>
  );

}




export default withExpoSnack(ContentScreen);
