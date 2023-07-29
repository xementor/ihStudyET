import clsx from "clsx"
import { withExpoSnack } from "nativewind"
import { useState } from "react"
import { GestureResponderEvent, Pressable, View, Text } from "react-native"
import _ from 'lodash';

function CardQuiz() {
  const [isFlipped, setFlipped] = useState<boolean>(false)
  const [isOptionCorrect, setSelection] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [options, setOptions] = useState<number[]>([])

  const correctOptions = [2]

  function handlePres(event: GestureResponderEvent, i: number): void {
    if (submitted) return;
    if (correctOptions.length > 1) {
      setOptions((prevOptions) => {
        const index = prevOptions.indexOf(i);
        if (index !== -1) {
          return prevOptions.filter((item) => item !== i);
        } else {
          return [...prevOptions, i];
        }
      });
    }
    else {
      setOptions([i])
    }
  }
  function handleButtonPress(event: GestureResponderEvent): void {
    setFlipped(!isFlipped)
  }

  function handleSubmit(event: GestureResponderEvent): void {
    setSubmitted(true)
    if (_.isEqual(options, correctOptions)) {
      setSelection(true)
    } else {
      setSelection(false)
    }
  }

  function renderResult() {
    if (submitted) {
      if (isOptionCorrect) {
        return <Text className="text-base p-3 font-bold">Correct</Text>

      }
      else {
        return <Text className="text-base p-3 font-bold">Incorrect</Text>
      }

    }
  }

  return (
    <View className="bg-slate-200 p-2">
      {!isFlipped &&
        <View>
          <Text className="text-base py-2">What is the output of modifing the program to `print (message + message)` ?</Text>
          <View className="py-2">


            {[0, 1, 2].map((v, i) => (
              <CardOption
                disabled={submitted}
                key={i}
                selected={options.indexOf(i) != -1}
                multiChoice={correctOptions.length > 1}
                handlePress={(ev) => handlePres(ev, i)}
              />
            ))
            }

          </View>




          <View className={!submitted ? "flex-row" : "flex-col"}>
            {
              !submitted &&
              <CardButton
                handlePress={handleSubmit}
                type={_.isEmpty(options) ? "disable" : "background"}
                content="Submit"
                style="mr-2"
              />
            }
            {renderResult()}
            <CardButton content="Explaination" handlePress={handleButtonPress} />
          </View>

        </View>
      }
      {
        isFlipped &&
        <View className="flex">
          <Text className="text-xl font-bold my-2">Explaination</Text>
          <Text className="text-base my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ad molestiae sapiente aliquam amet, eveniet, quidem in quod nihil totam ipsam soluta nesciunt pariatur eum perferendis quaerat mollitia laboriosam! Illo!</Text>

          <CardButton content="Back To the Problem" handlePress={handleButtonPress} />
        </View>
      }

    </View >
  )
}

type CardButtonProps = {
  type?: "outline" | "background" | "disable"
  content: string,
  style?: String,
  handlePress?: (event: GestureResponderEvent) => void
}

function CardButton({ type = "outline", content, style, handlePress }: CardButtonProps) {

  let commonStyle = "text-base font-bold flex-nowrap p-2 rounded-lg "
  if (type == "outline") commonStyle = commonStyle + "border-2 border-slate-400"
  else if (type == "disable") commonStyle += "border-slate-300 border-2 text-slate-300"
  else commonStyle += "bg-black text-white"

  return (
    <Pressable
      disabled={type === "disable"}
      onPress={handlePress}
      className={
        clsx(
          `flex justify-center items-start ${style}`,
        )
      }
    >
      <Text
        className={commonStyle}
      >{content}
      </Text>
    </Pressable>
  )
}

type CardOptionProps = {
  selected: boolean,
  handlePress: (event: GestureResponderEvent) => void,
  disabled?: boolean,
  multiChoice: boolean
}
function CardOption({ selected, handlePress, disabled, multiChoice }: CardOptionProps) {
  const [hovered, setHovered] = useState(false)


  return (
    <Pressable
      disabled={disabled}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPress={handlePress}
      className={
        clsx(
          "flex-row items-center my-1   p-2",
          hovered && "bg-slate-300",
          !disabled && "active:bg-slate-400"
        )
      }
    // style={selected && { transform: [{ rotateY: '180deg' }] }}
    >
      <View
        className={
          clsx(
            "border-2 border-slate-400 p-1 h-7 w-7",
            multiChoice ? "rounded-sm" : "rounded-full",
            "mr-2 flex justify-center items-center"
          )}>
        <View className={
          clsx(
            "bg-black w-4 h-4",
            multiChoice ? "rounded-sm" : "rounded-full",
            !selected && "hidden"

          )
        }
        />
      </View>
      <Text className="">The Welcome message display once</Text>
    </Pressable>
  )
}


export default withExpoSnack(CardQuiz)