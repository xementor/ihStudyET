import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import OptionsHolder from "../components/option_holder";
import Question_container from "../components/question_container";
import Option from "../components/option";
import { Question } from "../services/storage/model";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { selectOption, addOption, onBottomSheetVisibility } from "../store/question";

interface QuizScreenProps {
  question: Question;
}
const QuizScreen = ({ question }: QuizScreenProps) => {
  const { selectedOption, bottomSheetVisible } = useAppSelector((state) => state.question)
  const dispatch = useAppDispatch();
  const handleSelection = (index: number) => {
    if (bottomSheetVisible) {
      return;
    }
    dispatch(selectOption())
    dispatch(addOption({ id: index }))
    dispatch(onBottomSheetVisibility())
  }

  return (
    <View style={styles.container}>
      <Question_container content={question.text} />
      <OptionsHolder>
        {question.options &&
          question.options.map((option, index) => (
            <Option
              key={index}
              option={option.text}
              handleSelection={() => handleSelection(index)}
              variant={index === selectedOption ? "selected" : "default"}
            />
          ))
        }
      </OptionsHolder>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  }
})
export default QuizScreen;
