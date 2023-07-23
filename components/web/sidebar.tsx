import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import color from "../../colorsx";
import { lessons } from "../../app/content_page";

interface SideBarProps { }
export default function SideBar({ }: SideBarProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Name</Text>

      {lessons.map((value) => {
        return (
          <TouchableHighlight onPress={() => console.log("hi")}>
            <Text style={styles.lesson}>{"> " + value.title} </Text>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    maxWidth: 300,
    marginHorizontal: "auto",
    backgroundColor: color.surfaceContainerLowest,
    padding: 20,
  },

  title: {
    fontSize: 24,
    color: color.onBackground,
  },

  lesson: {
    backgroundColor: color.surfaceContainer,
    padding: 5,
    margin: 2,
    color: color.onBackground,
  },
});
