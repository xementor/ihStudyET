import ProgressHeader, { ScoreComponent } from "@/components/ProgressHeader";
import { course } from "@/services/storage/course";
import { SubLesson } from "@/services/storage/model";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import clsx from "clsx";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable, Animated, ScrollView } from "react-native";
import { IconButton, List } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function CourseScreen() {
  const [scrollY] = useState(new Animated.Value(0));
  const HEADER_MAX_HEIGHT = 250; // Set your desired maximum height for the top bar
  const HEADER_MIN_HEIGHT = 170;  // Set your desired minimum height for the top bar
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;


  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const fontSize = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [46, 30], // Adjust font size values as needed
    extrapolate: 'clamp',
  });
  const squareSize = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE], // Adjust the input range based on when you want the animation to occur
    outputRange: [80, 0],
    extrapolate: 'clamp',
  });

  return (
    <View className="h-full">
      <Animated.View className="w-full pt-3 web:pt-0 px-2" style={{ height: headerHeight, elevation: 8 }}>
        <View className="flex flex-row justify-between">
          <IconButton icon="chevron-left" />
          <ScoreComponent color="black" />
        </View>

        <View className="px-4" style={{ elevation: 8, }}>
          <View
            className="flex flex-row items-center justify-between py-2"
          >
            <Animated.Text
              className="font-bold flex-1"
              style={{ fontSize: fontSize }}
            >
              {course.title}
            </Animated.Text>
            <Animated.View className=" bg-slate-500 rounded-md" style={{ height: squareSize, width: squareSize }} />
          </View>
          <View className="h-5 bg-blue-300 rounded-3xl mt-1"></View>
        </View>

      </Animated.View>


      <ScrollView
        className=""
        style={{ flex: 1 }}
        contentContainerStyle={{}}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >

        <CourseCoverScrollPart
          courseDescription={course.description}
        />


        {
          course.chapters.map((subChapter, i) =>
            <ChapterItem chapterNo="1" key={i} chapter={subChapter} />
          )
        }

      </ScrollView>
    </View >
  )
}

interface ChapterItemProps {
  chapterNo: string,
  chapter: {
    title: string;
    subChapter: {
      title: string;
      lessons: SubLesson[];
    }[];
  }
}

const ChapterItem: React.FC<ChapterItemProps> = ({ chapterNo, chapter }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View >
      <Pressable onPress={handlePress} className="py-7">
        <View className="px-2 flex flex-row justify-between items-center bg-gray-100">
          <View className="flex flex-row items-center w-[90%]">
            <View className="bg-zinc-300 w-20 h-20 flex justify-center items-center rounded-lg mx-5">
              <Text className="text-3xl font-bold">{chapterNo}</Text>
            </View>
            <Text className="text-2xl font-bold">{chapter.title}</Text>
          </View>
          <IconButton
            icon={expanded ? "chevron-up" : "chevron-down"}
            size={25}
            onPress={handlePress} />
        </View>
      </Pressable>
      {
        expanded && chapter.subChapter.map((subChapter, i) =>
          <SubChapterItem subChapter={subChapter} key={i} state={i == 1 ? subLessonState.current : subLessonState.completed} />

        )

      }
      < View
        className="w-full h-[1px] bg-slate-400 mb-2"
        style={{ marginTop: expanded ? 28 : 0 }}
      />
    </View>
  );
}
interface LessonItemProps {
  subChapter: {
    title: string;
    lessons: SubLesson[];
  },
  state: subLessonState
}

enum subLessonState {
  "completed", "current", "notCompleted"

}
const SubChapterItem: React.FC<LessonItemProps> = ({ subChapter, state }) => {

  const ui = () => {
    if (state == subLessonState.completed) {
      return (
        <View
          className="bg-blue-500 w-16 
          h-16 mr-5 rounded-md flex 
          items-center justify-center"
        >
          <MaterialIcons name="check" size={35} color={"white"} />
        </View>
      )
    }
    else if (state == subLessonState.current) {
      return (
        <View className="ml-[-10]">
          <View className="mb-[-10]">
            <Text className="ml-[-5] text-base w-24 rounded-sm py-1 text-center  bg-blue-500 text-slate-100">Continue</Text>
            <View className=" w-10 mt-[-13] ml-7">
              <MaterialCommunityIcons name="menu-down" color="blue" size={30} />
            </View>
          </View>
          <View className="border-4 mr-5 p-1  border-blue-500 rounded-md">
            <Pressable
              className="bg-slate-700 w-16 h-16  rounded-md border-b-4 flex items-center justify-center"

            >
              <MaterialIcons name="play-arrow" color={"white"} size={30} />

            </Pressable>
          </View>
        </View>
      )


    }
    else (state == subLessonState.notCompleted)
    return (
      <Pressable
        className="bg-slate-400 w-16 h-16 mr-5 rounded-md border-b-4 flex items-center justify-center"

      >
        <MaterialIcons name="lock" size={30} />

      </Pressable>
    )

  }
  return (
    <View className="pl-7">
      <View className="w-1 h-6 bg-slate-400 ml-10" />

      < Link href="/test" asChild >
        <View className="flex flex-row items-center p-2 bg-slate-100 ">

          {
            ui()

          }
          <Text className="text-base">{subChapter.title}</Text>
        </View>
      </Link >
    </View >
  )
}

interface CourseCoverProps {
  courseName: string,
}
const CourseCover: React.FC<CourseCoverProps> = ({ courseName }) => {
  return (<View className="p-4" style={{ elevation: 8, }}>
    <View className="flex flex-row items-center justify-between py-2">
      <Text className="text-4xl font-bold flex-1">{courseName}</Text>
      <View className="w-20 h-20 bg-zinc-500 rounded-md" />
    </View>
    <View className="h-5 bg-blue-300 rounded-3xl my-6"></View>
  </View>
  );

}

const CourseCoverScrollPart: React.FC<{ courseDescription: string }> = ({ courseDescription }) => (
  <View className="px-6">
    <Text className="text-base py-6">{courseDescription}</Text>

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

function newFunction() {
  return <View className="p-3 flex flex-row items-center justify-between">
    <View className="flex justify-center flex-1">
      <Text className="flex-1 text-base font-bold">Programming with Python vong cogng</Text>
    </View>
    <View className="h-5 bg-blue-300 rounded-3xl my-6" style={{ flex: 1 }} />
  </View>;
}

