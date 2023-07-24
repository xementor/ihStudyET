import { useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import StyleSheet from "react-native-media-query";

import ContentContainer from "../components/content_container";
import AppButton from "../components/button";

import { Content, ContentType } from "../services/storage/model";
import { addInfo, incrementIndex, resetIndex } from "../store/sublesson";
import { useAppSelector, useAppDispatch } from "../app/hook";
import { incrementLessonIdx } from "../store/lessons";
import { cLesson1, cLesson2, cLesson3 } from "../services/storage/c";
import { toggleTheme } from "../store/theme";
import { ColorType } from "@/constants/theming/types";
import useTheme from "@/constants/theming/useTheme";
import ProgressHeader from "@/components/ProgressHeader";

export const lessons = [cLesson1, cLesson2, cLesson3];

export default function ContentScreen() {
  const { index } = useAppSelector((state) => state.subLesson);
  const { lessonIdx } = useAppSelector((state) => state.lesson);
  const { isDark } = useAppSelector(state => state.theme)

  const { colors: color } = useTheme()
  const { styles, ids } = getStyles(color)

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

  const renderItem = ({ item }: { item: Content }) => (
    <ContentContainer content={item.content.text} />
  );

  function handleToggleTheme(): void {
    dispatch(toggleTheme())
  }

  // return (
  //   <View>
  //     <Text>Lets see</Text>
  //   </View>
  // );

  return (
    <View style={styles.contentContainer}>
      <View className="w-full h-3">
        <ProgressHeader />
      </View>

      <View style={styles.contentArea}>
        <View className="h-full m-4">
          <View style={styles.heading}>
            <Text style={styles.heading_text}>{onePageLesson.title}</Text>
          </View>

          <FlatList
            data={onePageLesson.contents.slice(0, index)}
            renderItem={renderItem}
          />

          <View className="flex justify-center items-center w-full">
            <AppButton content="Continue" onPress={onPress} />
          </View>
        </View>
      </View>
    </View>
  );

}

const getStyles = (color: ColorType) => StyleSheet.create({
  contentContainer: {
    backgroundColor: color.surfaceContainerHighest,
    flex: 1,
    alignItems: "center",
  },

  content: {
    width: "100%",
    alignSelf: "flex-start",
    flex: 1,
  },

  heading: {
    marginTop: 70,
    marginBottom: 10,
  },

  heading_text: {
    color: color.onSurface,
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  sidebarLeftContainer: {
    backgroundColor: color.surfaceDim,
    flex: 1,
  },
  sidebarRight: {
    backgroundColor: color.surfaceDim,
    flex: 1,
  },
  contentArea: {
    width: "100%",
    maxWidth: 540,
    flex: 1,
    marginVertical: 10,
  },
});
