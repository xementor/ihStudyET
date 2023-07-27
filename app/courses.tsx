import { StyleSheet, View, Text, Platform } from "react-native";
import CourseCover from "../components/CourseCover";
import Nav from "../components/web/NavBar"
import useTheme from "@/constants/theming/useTheme";
import StreakBoard from "@/components/StreakBoard";


const CoursesScreen = () => {
  const { colors: color } = useTheme()

  return (
    <>
      {Platform.OS === "web" &&
        <Nav />
      }
      <View className="p-2">
        <StreakBoard />
        <Text className="text-2xl font-bold my-4">Your course history</Text>

        <View className="flex flex-row flex-wrap">
          <CourseCover hasButton={true} />
        </View>
      </View>
    </>
  );
}




export default CoursesScreen;