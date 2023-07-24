import ProgressHeader, { ScoreComponent } from "@/components/ProgressHeader";
import { course } from "@/services/storage/course";
import { SubLesson } from "@/services/storage/model";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable, Animated, ScrollView } from "react-native";
import { IconButton, List } from "react-native-paper";


export default function CourseScreen() {
  const [scrollY] = useState(new Animated.Value(0));
  const HEADER_MAX_HEIGHT = 0; // Set your desired maximum height for the top bar
  const HEADER_MIN_HEIGHT = -40;  // Set your desired minimum height for the top bar
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





  return (
    <View className="bg-slate-100 h-full">
      <Animated.View className="bg-yellow-200 w-full pt-3 web:pt-0" style={{}}>
        <View className="flex flex-row justify-between">
          <IconButton icon="chevron-left" />
          <ScoreComponent color="black" />
        </View>
        <CourseCover
          courseName={course.title}
        />
      </Animated.View>


      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
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
    <View>
      <Pressable onPress={handlePress}>
        <View className="px-2 py-7 flex flex-row justify-between items-center bg-red-100">
          <View className="flex flex-row items-center w-[90%]">
            <View className="bg-red-300 w-20 h-20 flex justify-center items-center rounded-lg mx-5">
              <Text className="text-3xl font-bold">{chapterNo}</Text>
            </View>
            <Text className="text-2xl font-bold">{chapter.title}</Text>
          </View>
          <IconButton
            icon={expanded ? "chevron-up" : "chevron-down"}
            size={25}
            onPress={handlePress} />
        </View>
        <View className="w-full h-[1px] bg-slate-600" />
      </Pressable>
      {
        expanded && chapter.subChapter.map((subChapter, i) =>
          <SubChapterItem subChapter={subChapter} key={i} />
        )
      }
    </View>
  );
}
interface LessonItemProps {
  subChapter: {
    title: string;
    lessons: SubLesson[];
  }
}
const SubChapterItem: React.FC<LessonItemProps> = ({ subChapter }) => {
  return (
    <Link href="/test" asChild>
      <View className="flex flex-row items-center p-2 bg-blue-300 pl-10 ">
        <Pressable
          className="bg-red-300 w-16 h-16 mr-5 rounded-md border-b-2"
          onPress={() => { }} />
        <Text className="text-base">{subChapter.title}</Text>
      </View>
    </Link>
  )
}

interface CourseCoverProps {
  courseName: string,
}
const CourseCover: React.FC<CourseCoverProps> = ({ courseName }) => {
  return (<View className="p-4 bg-slate-300" style={{ elevation: 8, }}>
    <View className="flex flex-row items-center justify-between py-2">
      <Text className="text-4xl font-bold flex-1">{courseName}</Text>
      <View className="w-20 h-20 bg-red-600 rounded-md" />
    </View>
    <View className="h-5 bg-blue-300 rounded-3xl my-6"></View>
  </View>
  );


}

const CourseCoverScrollPart: React.FC<{ courseDescription: string }> = ({ courseDescription }) => (
  <View className="p-4">
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

