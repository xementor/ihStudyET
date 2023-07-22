import { TouchableWithoutFeedback, View, Text } from 'react-native'
import { withExpoSnack, styled } from 'nativewind';
import colors from "tailwindcss/colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { cLesson1, cLesson2, cLesson3 } from "../services/storage/c";
import { useAppSelector } from '@/app/hook';
export const lessons = [cLesson1, cLesson2, cLesson3];

const StyledFontAwesome = styled(FontAwesome)

function ProgessHeader() {
  const { lessonIdx } = useAppSelector((state) => state.lesson);
  return (
    <View className="pt-3 web:pt-0 h-20 bg-white flex flex-row justify-between items-center dark:bg-slate-900">
      <StyledFontAwesome className='ml-3 lg:ml-6' name='close' size={25} color={colors.blue[500]} />

      <View className='flex flex-row w-[70%] lg:w-[50%] justify-between items-center'>
        <StyledFontAwesome className='android:hidden ios:hidden pr-4' name='backward' size={25} color={colors.blue[500]} />
        <View className='flex flex-row w-full'>

          {
            lessons.map((subLesson, index) => {
              const width = (subLesson.contents.length / 20) * 100
              return (
                <TouchableWithoutFeedback key={index} >
                  <View className="border-2 border-slate-200  flex items-center justify-center bg-green-700 rounded-md h-3"
                    style={{
                      width: `${width}%`,
                      marginRight: index == lessons.length - 1 ? 0 : 2
                    }}
                  >
                    {/* <View className='bg-blue-300 w-[80%] h-[80%] rounded-md m-2 ' /> */}
                  </View>

                </TouchableWithoutFeedback>
              )
            }
            )
          }
        </View>
        <StyledFontAwesome className='android:hidden ios:hidden ml-3 lg:ml-6' name='forward' size={25} color={colors.blue[500]} />
      </View>

      <View className='flex flex-row'>
        <Text>0</Text>
        <StyledFontAwesome className='mr-3 ml-1' name='bolt' size={25} color={colors.blue[500]} />

      </View>
    </View>
  );
}

export default withExpoSnack(ProgessHeader);


