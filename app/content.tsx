import { useEffect, useRef, useState } from "react";
import { Text, View, FlatList, ScrollView, NativeSyntheticEvent, NativeScrollEvent, LayoutChangeEvent, Pressable, GestureResponderEvent } from "react-native";
import StyleSheet from "react-native-media-query";

import ContentContainer from "../components/content_container";
import AppButton from "../components/AppButton";

import { Content, ContentType } from "../services/storage/model";
import { addInfo, incrementIndex, resetIndex } from "../store/sublesson";
import { useAppSelector, useAppDispatch } from "./hook";
import { incrementLessonIdx } from "../store/lessons";
import ProgressHeader, { lessons } from "@/components/ProgressHeader";
import { styled, withExpoSnack } from "nativewind";
import clsx from "clsx";




function ContentScreen() {
  const [showButton, setShowButton] = useState(true);
  const scrollViewRef = useRef<ScrollView>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);

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

    console.log(containerHeight)
    scrollViewRef.current?.scrollToEnd({ animated: true })
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
    const isHide = (contentOffset.y + layoutMeasurement.height) > (contentSize.height - 100)
    setShowButton(isHide);
  };


  return (
    <View className="flex-1 items-center bg-slate-100">

      <View className="w-full h-3 z-10">
        <ProgressHeader />
      </View>

      <View className="h-full w-full sm:w-2/3 md:w-1/2">

        <ScrollView className="px-2"
          onScroll={handleScroll}
          ref={scrollViewRef}

        >
          <View className="mt-20 mb-3 ml-2">
            <Text className="text-2xl font-bold">{onePageLesson.title}</Text>
          </View>

          <Card />

          {onePageLesson.contents.slice(0, index).map((item, index) => {
            return <ContentContainer content={item.content.text} key={index} />
          })}
        </ScrollView>

        {showButton && <View className="absolute bottom-2 w-full px-2">
          <AppButton content="Continue" onPress={onPress} />
        </View>
        }

      </View>

    </View>
  );

}

function Card() {
  const [selectedOption, selectOption] = useState<number>()

  function handlePres(event: GestureResponderEvent, i: number): void {
    selectOption(i)
    // alert(i)
  }

  return (
    <View className="bg-slate-200 p-2">
      <Text className="text-base py-2">What is the output of modifing the program to `print (message + message)` ?</Text>
      <View className="py-2">


        {[0, 1, 2].map((v, i) => (
          <CardOption key={i} selected={i == selectedOption} handlePress={(ev) => handlePres(ev, i)} />
        ))
        }

      </View>


      <View className="flex-row">
        <CardButton type="background" content="Submit" style="mr-2" />
        <CardButton content="Explaination" />
      </View>


    </View>
  )
}

type CardButtonProps = {
  type?: "outline" | "background",
  content: string,
  style?: String
}

function CardButton({ type = "outline", content, style }: CardButtonProps) {

  let commonStyle = "text-base font-bold flex-nowrap p-2 rounded-lg "
  if (type == "outline") commonStyle = commonStyle + "border-2 border-slate-400"
  else commonStyle += "bg-black text-white"
  return (
    <Pressable className={
      clsx(
        `flex justify-center items-start ${style}`,
        "active:bg-red-100"
      )
    } >
      <Text
        className={commonStyle}
      >{content}
      </Text>
    </Pressable>
  )
}

type CardOptionProps = { selected: boolean, handlePress: (event: GestureResponderEvent) => void }
function CardOption({ selected, handlePress }: CardOptionProps) {
  const [hovered, setHovered] = useState(false)


  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPress={handlePress}
      className={
        clsx(
          "flex-row items-center my-1  active:bg-red-200 p-2",
          hovered && "bg-slate-300",
          selected && "border-0"
        )
      }
    >
      <View className="border-2 border-slate-400 p-1 h-6 w-6 rounded-full mr-2 flex justify-center items-center">
        <View className={
          clsx(
            "bg-black rounded-full w-4 h-4",
            !selected && "hidden"

          )
        }
        />
      </View>
      <Text className="">The Welcome message display once</Text>
    </Pressable>
  )
}


export default withExpoSnack(ContentScreen);
