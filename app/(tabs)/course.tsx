import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import React, { useRef, useState } from "react";
import { Animated, FlatList, Platform, ScrollView, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

import { ScoreComponent } from "@/components/ProgressHeader";
import Nav from "@/components/web/NavBar";
import { useAppDispatch, useAppSelector } from '../hook';
import { updateCourseDes, updateCourseTitle } from '@/store/editCourse';
import EditAbleText from '@/components/EditableText';
import { ChapterItem } from '@/components/ChapterItem';


export default function CourseScreen() {
  const { course } = useAppSelector((state) => state.editCourse);
  const dispatch = useAppDispatch();

  const [scrollY] = useState(new Animated.Value(0));
  const HEADER_MAX_HEIGHT = 250; // Set your desired maximum height for the top bar
  const HEADER_MIN_HEIGHT = 170;  // Set your desired minimum height for the top bar
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
  const scrollViewRef = useRef<ScrollView>(null);




  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false },
  );


  const handleScrollEnd = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y; // Get the current scroll position
    if (offsetY < HEADER_SCROLL_DISTANCE) {
      const nearestPos = offsetY > HEADER_SCROLL_DISTANCE / 2 ? HEADER_SCROLL_DISTANCE : 0;
      scrollViewRef.current?.scrollTo({ y: nearestPos, animated: true });

    }
  };



  const fontSize = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [46, 30], // Adjust font size values as needed
    extrapolate: 'clamp',
  });
  const opacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE], // Adjust the input range based on when you want the animation to occur
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });






  if (Platform.OS === 'web') {
    return (
      <ScrollView>
        <Nav />

        <View className="sm:m-auto md:m-0 md:p-5 flex md:flex-row justify-center md:justify-start">

          <View className="md:m-3 lg:m-10 ">
            <View className="flex md:w-[400px] lg:w-[500px] border-slate-300 border-2">
              <View className="pt-3 web:pt-0 px-2" style={{ elevation: 8 }}>

                <View className="px-4" style={{ elevation: 8, }}>
                  <View
                    className="flex flex-row items-center justify-between py-2"
                  >
                    <EditAbleText className="font-bold flex-1 text-3xl"
                      onSave={(title) => dispatch(updateCourseTitle(title))}
                    >
                      {course.title}
                    </EditAbleText>

                    <View className=" bg-slate-500 rounded-md h-20 w-20" />
                  </View>
                  <View className="h-5 bg-blue-300 rounded-3xl mt-1"></View>
                </View>
              </View>
              <CourseCoverScrollPart
                courseDescription={course.description}
              />
            </View>
          </View>
          <View className="md:flex-1">
            <FlatList
              data={course.chapters}
              renderItem={({ item, index }) => <ChapterItem index={index} chapter={item} />}
              keyExtractor={(item, index) => index.toString()} // Assuming you don't have unique IDs in the data.
            />
          </View>

        </View>

      </ScrollView>

    );
  }


  return (
    <View>


      <View className="h-full md:mx-auto">
        <Animated.View className=" w-full pt-5 web:pt-0 px-2 text-3xl" style={{ elevation: 5 }}>
          <View className="flex flex-row justify-between">
            <IconButton icon="chevron-left" />
            <ScoreComponent color="black" />
          </View>

          <View className="px-4 pb-5 bottom-2" style={{ elevation: 8, }}>
            <View
              className="flex flex-row items-center justify-between py-2"
            >
              <Animated.Text
                className="font-bold flex-1"
                style={{ fontSize: fontSize }}
              >
                {course.title}
              </Animated.Text>
              <Animated.View className=" bg-slate-500 rounded-md w-20 h-20" style={{ opacity: opacity }} />
            </View>
            <View className="h-5 bg-blue-300 rounded-3xl mt-1"></View>
          </View>

        </Animated.View>


        <ScrollView
          className=""
          ref={scrollViewRef}
          style={{ flex: 1 }}
          contentContainerStyle={{}}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleScrollEnd}
          scrollEventThrottle={16}
        >

          <CourseCoverScrollPart
            courseDescription={course.description}
          />


          {
            course.chapters.map((subChapter, i) =>
              <ChapterItem index={i} key={i} chapter={subChapter} />
            )
          }

        </ScrollView>
      </View >
    </View>

  )

}






const CourseCoverScrollPart: React.FC<{ courseDescription: string }> = ({ courseDescription }) => {


  const dispatch = useAppDispatch()
  return (

    <View className="px-6">
      <EditAbleText
        className="text-base py-2"
        onSave={(des) => dispatch(updateCourseDes(des))}
      >
        {courseDescription}
      </EditAbleText>

      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-center">
          <MaterialIcons
            name="notes"
            size={25}
            className='p-2 md:p-3' />
          <Text className="ml-4">19 Lessons</Text>
        </View>

        <IconButton
          icon="chevron-down"
          size={25}
          onPress={() => { }} />

      </View>
    </View>
  )
}








