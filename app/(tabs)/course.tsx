import { useRef, useState } from "react";
import { View, Text, Pressable, Animated, ScrollView, Platform, FlatList } from "react-native";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { IconButton } from "react-native-paper";

import Nav from "@/components/web/NavBar";
import { ScoreComponent } from "@/components/ProgressHeader";
import { course } from "@/services/storage/course";
import { SubLesson } from "@/services/storage/model";



export default function CourseScreen() {
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

  const boxSize = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE], // Adjust the input range based on when you want the animation to occur
    outputRange: [80, 1],
    extrapolate: 'clamp',
  });


  if (Platform.OS === 'web') {
    return (
      <ScrollView>
        <Nav />

        <View className="sm:m-auto md:m-0 md:p-5 flex md:flex-row justify-center md:justify-start">

          <View className="md:m-10 ">
            <View className="flex md:w-[500px] border-slate-300 border-2">
              <View className="pt-3 web:pt-0 px-2" style={{ elevation: 8 }}>

                <View className="px-4" style={{ elevation: 8, }}>
                  <View
                    className="flex flex-row items-center justify-between py-2"
                  >
                    <Text
                      className="font-bold flex-1 text-3xl"
                    >
                      {course.title}
                    </Text>
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
          <FlatList
            data={course.chapters}
            renderItem={({ item, index }) => <ChapterItem chapterNo={(index + 1).toString()} chapter={item} />}
            keyExtractor={(item, index) => index.toString()} // Assuming you don't have unique IDs in the data.
          />

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
              <ChapterItem chapterNo="1" key={i} chapter={subChapter} />
            )
          }

        </ScrollView>
      </View >
    </View>

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

  const getState = (i: number) => {
    if (i == 1) return subLessonState.current
    else if (i < 1) return subLessonState.completed
    else return subLessonState.notCompleted

  }

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
          <SubChapterItem subChapter={subChapter} key={i} state={getState(i)} />

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

      < Link href="/content_page" asChild >
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
    <Text className="text-base py-2">{courseDescription}</Text>

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

