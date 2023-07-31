import { TouchableWithoutFeedback, View, Text, Pressable } from 'react-native'
import { withExpoSnack, styled } from 'nativewind';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { cLesson1, cLesson2, cLesson3 } from "../services/storage/c";
import { useAppSelector } from '@/app/hook';
import useTheme from '@/constants/theming/useTheme';
import clsx from 'clsx';
import { IconButton as IB, MD3Colors } from 'react-native-paper';
import { showSheet } from '@/store/contentsBottomSheet';
import { MaterialIcons } from '@expo/vector-icons';
import { ColorType } from '@/constants/theming/types';
import { Link } from 'expo-router';


export const lessons = [cLesson1, cLesson2, cLesson3];

const StyledFontAwesome = styled(FontAwesome)
const StyledIB = styled(IB)

interface IconButtonProps {
  name: React.ComponentProps<typeof StyledFontAwesome>['name'];
  web?: boolean,
  style?: string,
}

function ProgessHeader() {

  const { colors } = useTheme()
  const { lessonIdx } = useAppSelector((state) => state.lesson);
  const { index: subLessonIdx } = useAppSelector(state => state.subLesson)

  const handlePress = () => {
    dispatch(showSheet())
    // dispatch(setLessonIndex({lessonIdx: index}))
    // dispatch(resetIndex())
  }

  const IconButton: React.FC<IconButtonProps> = ({ name, web = false, style }) => {
    const className = clsx('p-2', web && 'hidden android:hidden ios:hidden md:flex', style)
    return (
      <Link href="/" asChild>
        <StyledIB
          icon={name}
          size={25}
          iconColor={colors.onSurface}
          className={className}
          onPress={() => { }}
        />
      </Link>
    )
  }

  return (
    <View className="pt-3 web:pt-0 h-20 flex flex-row justify-between items-center" style={{ backgroundColor: colors.surfaceContainerLowest }}>

      <View className="ml-1 lg:ml-6">
        <IconButton name="close" />
      </View>

      <View className='flex flex-row w-2/3 lg:w-2/3 justify-between items-center'>
        {/* <View className='flex flex-row items-center'> */}

        <IconButton name="chevron-left" web={true} />
        <View className='flex flex-row flex-1'>

          {
            lessons.map((subLesson, index) => {
              const width = (subLesson.contents.length / 20) * 100
              const progressPercentage = Math.floor(((subLessonIdx + 1) / subLesson.contents.length) * 100)
              return (
                <TouchableWithoutFeedback key={index} >
                  <View className="flex-shrink border-2 border-slate-200 bg-slate-50 rounded-md h-3"
                    style={
                      [
                        {
                          width: `${width}%`,
                          marginRight: index == lessons.length - 1 ? 0 : 2,
                        },
                        index < lessonIdx ?
                          {
                            backgroundColor: colors.primary
                          } : null,
                      ]
                    }
                  >
                    <View
                      style={[
                        index === lessonIdx ?
                          {
                            width: `${progressPercentage}%`,
                            height: "100%",
                            backgroundColor: colors.secondary,
                            borderRadius: 6
                          } : null,
                      ]}
                    />
                  </View>

                </TouchableWithoutFeedback>
              )
            }
            )
          }
        </View>
        <IconButton name="chevron-right" web={true} />
      </View>

      <ScoreComponent color={colors.onSurface} />
    </View >
  );
}

export default withExpoSnack(ProgessHeader);




interface ScoreComponentProps {
  color: string;
}
export const ScoreComponent: React.FC<ScoreComponentProps> = ({ color }) => {
  return <View className='ml-3 flex flex-row items-center'>
    <Text className=" text-base" style={{ color: color }}>0</Text>
    <View className="mr-1 lg:mr-6">
      {/* <IconButton name="bolt" /> */}
      <MaterialIcons
        name="bolt"
        size={25}
        color={color}
        className='p-2 md:p-3' />
    </View>
  </View>;
}



function dispatch(arg0: { payload: undefined; type: "bottomSheetOpen/showSheet"; }) {
  throw new Error('Function not implemented.');
}

