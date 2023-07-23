import { TouchableWithoutFeedback, View, Text, Pressable } from 'react-native'
import { withExpoSnack, styled } from 'nativewind';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { cLesson1, cLesson2, cLesson3 } from "../services/storage/c";
import { useAppSelector } from '@/app/hook';
import useTheme from '@/constants/theming/useTheme';
export const lessons = [cLesson1, cLesson2, cLesson3];
import clsx from 'clsx';
import { IconButton as IB, MD3Colors } from 'react-native-paper';

const StyledFontAwesome = styled(FontAwesome)
const StyledIB = styled(IB)

interface IconButtonProps {
  name: React.ComponentProps<typeof StyledFontAwesome>['name'];
  web?: boolean
}

function ProgessHeader() {

  const { colors } = useTheme()
  const { lessonIdx } = useAppSelector((state) => state.lesson);

  const IconButton: React.FC<IconButtonProps> = ({ name, web = false }) => {
    const className = clsx('p-2', web && 'hidden android:hidden ios:hidden md:flex',)
    return (
      <View className="ml-1 lg:ml-6">
        <StyledIB
          icon={name}
          size={30}
          iconColor={colors.onSurface}
          className={className}
          onPress={() => { }}
        />
      </View>

      // <Pressable className="ml-1 lg:ml-6 active:bg-blue-300">
      //   <StyledFontAwesome className={className} name={name} size={25} color={colors.onSurface} />
      // </Pressable>
    )
  }

  return (
    <View className="pt-3 web:pt-0 h-20 flex flex-row justify-between items-center" style={{ backgroundColor: colors.surfaceContainerHighest }}>

      <IconButton name="close" />
      <View className='flex flex-row w-[70%] lg:w-[50%] justify-between items-center'>

        <IconButton name="chevron-left" web={true} />
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
        <IconButton name="chevron-right" web={true} />
      </View>

      <View className='flex flex-row items-center'>
        <Text className="font-bold text-lg" style={{ color: colors.onSurface }}>0</Text>
        <IconButton name="bolt" />
      </View>
    </View>
  );
}

export default withExpoSnack(ProgessHeader);


