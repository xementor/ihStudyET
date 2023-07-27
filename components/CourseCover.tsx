import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import AppButton from './AppButton';
import { Link } from 'expo-router';

interface CourseCoverProps {
  hasButton?: boolean
}

const CourseCover = ({ hasButton }: CourseCoverProps) => {

  return (
    <Link href="/course" asChild >
      <Pressable
        className='p-5 rounded-md border-slate-300 border-2'
      >
        <View className='h-[150px] bg-slate-500'>
          <Image className='w-full'
            source={require('../assets/images/favicon.png')}
            style={{ width: 120, height: 120, }} />
        </View>
        <Text className='text-sm mt-2'>Programing with python . Lesson 2 of 19</Text>
        <Text className='text-base font-bold my-2'>Solving Equation</Text>
        <Text className='text-sm'>See how python handle differnent type fo data.</Text>
        <View className='h-2 my-4 bg-blue-200'>
          <View className='h-2 bg-blue-500 w-4' />
        </View>

        {hasButton &&
          <Link href="/course" asChild >
            <AppButton content='Resume course' />
          </Link>
        }

      </Pressable>
    </Link >
  );
};

export default CourseCover;

