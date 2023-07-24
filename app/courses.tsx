import { StyleSheet, View, Text, Platform } from "react-native";
import CourseCover from "../components/course_cover";
import Nav from "../components/web/navbar"
import useTheme from "@/constants/theming/useTheme";


const CoursesScreen = () => {
  const { colors: color } = useTheme()

  const styles = StyleSheet.create({
    courseContainer: {
      flexDirection: "row",
      gap: 20,
      flexGrow: 1,
      flexWrap: "wrap"
    },
    heading: {
      fontSize: 25,
      color: color.onBackground,
      fontWeight: "bold"
    }
  })

  return (
    <>
      {Platform.OS === "web" &&
        <Nav />
      }

      <View style={{ marginHorizontal: 25, }}>
        <View style={{ marginTop: 50, marginBottom: 30, }}>
          <Text style={styles.heading}>Your course history</Text>
        </View>

        <View className="flex flex-row flex-wrap">
          <CourseCover />
          <CourseCover />
          <CourseCover />
          <CourseCover />
          <CourseCover />
          <CourseCover />
          <CourseCover />
        </View>
      </View>
    </>
  );
}




export default CoursesScreen;