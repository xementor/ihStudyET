import color from "@/constants/colorsx";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { View, Text, Pressable } from "react-native";
import { IconButton } from "react-native-paper";
import { Line } from "react-native-svg";

export default function CourseScreen() {

  return (
    <View className="bg-slate-100 h-full">


      <CourseCover
        courseName="Programming with Python"
        courseDescription="Learn one of the most in-demand programming language the fun way."
      />
      <ChapterItem chapterNo="1" chapterTitle="Python Dictionary" />

      <LessonItem lessonTitle="vong cong" />

    </View >
  )
}

interface ChapterItemProps {
  chapterNo: string,
  chapterTitle: string,
}

const ChapterItem: React.FC<ChapterItemProps> = ({ chapterNo, chapterTitle }) => {
  return (
    <>
      <View className="px-2 py-7 flex flex-row justify-between items-center bg-red-100">
        <View className="flex flex-row items-center w-[90%]">
          <View className="bg-red-300 w-20 h-20 flex justify-center items-center rounded-lg mx-5">
            <Text className="text-3xl font-bold">{chapterNo}</Text>
          </View>
          <Text className="text-2xl font-bold">{chapterTitle}</Text>
        </View>
        <IconButton
          icon="chevron-down"
          size={25}
          onPress={() => { }} />
      </View>
      <View className="w-full h-[1px] bg-slate-600" />
    </>
  );
}
interface LessonItemProps {
  lessonTitle: string
}
const LessonItem: React.FC<LessonItemProps> = ({ lessonTitle }) => {
  return <View className="flex flex-row items-center p-2 bg-blue-300 pl-10 ">
    <Pressable
      className="bg-red-300 w-16 h-16 mr-5 rounded-md border-b-2"
      onPress={() => { }} />
    <Text className="text-base">{lessonTitle}</Text>
  </View>;
}

interface CourseCoverProps {
  courseName: string,
  courseDescription: string,
}
const CourseCover: React.FC<CourseCoverProps> = ({ courseName, courseDescription }) => {
  return <View className="bg-zinc-300 p-4">
    <View className="flex flex-row items-center justify-between py-2">
      <Text className="text-4xl font-bold">{courseName}</Text>
      <View className="w-20 h-20 bg-red-600 rounded-md" />
    </View>
    <View className="h-5 bg-blue-300 rounded-3xl my-6"></View>
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
  </View>;
}

