import clsx from "clsx"
import { withExpoSnack } from "nativewind"
import { useState } from "react"
import { GestureResponderEvent, Pressable, View, Text } from "react-native"

function CardQuiz() {
  const [selectedOption, selectOption] = useState<number>(-1)
  const [isFlipped, setFlipped] = useState<boolean>(false)
  const [selectionCorrect, setSelection] = useState<boolean>(false)
  const [clickedSubmit, setClickSubmit] = useState<boolean>(false)

  const correctAnserIndex = 1

  function handlePres(event: GestureResponderEvent, i: number): void {
    if (clickedSubmit) return;
    selectOption(i)
    // alert(i)
  }
  function handleButtonPress(event: GestureResponderEvent): void {
    setFlipped(!isFlipped)
  }

  function handleSubmit(event: GestureResponderEvent): void {
    setClickSubmit(true)
    if (selectedOption != correctAnserIndex) {
      setSelection(false)
    } else {
      setSelection(true)
    }
  }

  function renderCorrect() {
    if (clickedSubmit) {
      if (selectionCorrect) {
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
              <CardOption disabled={clickedSubmit} key={i} selected={i == selectedOption} handlePress={(ev) => handlePres(ev, i)} />
            ))
            }

          </View>




          <View className={!clickedSubmit ? "flex-row" : "flex-col"}>
            {
              !clickedSubmit &&
              <CardButton
                handlePress={handleSubmit}
                type={selectedOption == -1 ? "disable" : "background"}
                content="Submit"
                style="mr-2"
              />
            }
            {renderCorrect()}
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
  disabled?: boolean
}
function CardOption({ selected, handlePress, disabled }: CardOptionProps) {
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
      <View className="border-2 border-slate-400 p-1 h-7 w-7 rounded-full mr-2 flex justify-center items-center">
        <View className={
          clsx(
            "bg-black rounded-full w-4 h-4",
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