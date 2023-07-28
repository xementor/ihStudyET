import { useEffect, useState } from "react";
import { Text, View, FlatList, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import StyleSheet from "react-native-media-query";

import ContentContainer from "../components/content_container";
import AppButton from "../components/AppButton";

import { Content, ContentType } from "../services/storage/model";
import { addInfo, incrementIndex, resetIndex } from "../store/sublesson";
import { useAppSelector, useAppDispatch } from "./hook";
import { incrementLessonIdx } from "../store/lessons";
import { cLesson1, cLesson2, cLesson3 } from "../services/storage/c";
import { toggleTheme } from "../store/theme";
import { ColorType } from "@/constants/theming/types";
import useTheme from "@/constants/theming/useTheme";
import ProgressHeader, { lessons } from "@/components/ProgressHeader";




export default function ContentScreen() {
  const [showButton, setShowButton] = useState(true);

  const { index } = useAppSelector((state) => state.subLesson);
  const { lessonIdx } = useAppSelector((state) => state.lesson);




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




  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isReachingEnd = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    setShowButton(isReachingEnd);
  };


  return (
    <View className="flex-1 items-center bg-slate-100">
      <View className="w-full h-3 z-10">
        <ProgressHeader />
      </View>



      <View className="bg-red-100 h-full w-full">
        <ScrollView className="" >
          <View className="mt-20 mb-3">
            <Text className="text-2xl font-bold">{onePageLesson.title}</Text>
          </View>


          {onePageLesson.contents.slice(0, index).map((item, index) => {
            return <ContentContainer content={item.content.text} key={index} />
          })}

          {/* {showButton && */}
          {/* } */}
        </ScrollView>
        <View className="flex justify-center  items-center flex-1 absolute bottom-5">
          <AppButton content="Continue" onPress={onPress} />
        </View>
      </View>
    </View>
  );

}

