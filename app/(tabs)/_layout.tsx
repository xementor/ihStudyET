import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Slot, Tabs } from 'expo-router';
import useTheme from '@/constants/theming/useTheme';
import { useEffect, useState } from 'react';
import { Dimensions, Platform } from 'react-native';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const screenWidth = Dimensions.get('window').width;
  const { colors } = useTheme()

  return (
    (screenWidth < 660) ?
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,

        }}>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="course"
          options={{
            headerShown: false,
            title: 'Courses',
            tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          }}
        />

      </Tabs> :
      <Slot />
  );
}
