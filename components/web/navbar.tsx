import * as React from 'react';
import StyleSheet from 'react-native-media-query';
import { breakPoint } from '../../constants/style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native'

import { ColorType } from '@/constants/theming/types';
import useTheme from '@/constants/theming/useTheme';
import { Link } from 'expo-router';



const Nav = () => {
  const { colors: color } = useTheme()
  const { styles, ids } = getStyles(color)

  function NavItem({ name }: { name: string }) {
    return (
      <Link href="/(tabs)/course" style={styles.navItem}>
        <MaterialCommunityIcons size={24} accessibilityHint='close' name={name == "Course" ? "book" : "home"} color={color.onSurface} />
        <Text style={{ color: color.onSurface }}>{name}</Text>
      </Link>
    );
  }


  return (
    <>
      <View className='my-4 flex flex-row px-2 sm:px-16 justify-between items-center'>
        <Text
          style={styles.logo}
          className='w-20 h-8 rounded-lg sm:w-36 text-center'
        >
          Text
        </Text>

        <View className='hidden sm:flex sm:flex-row'>
          <NavItem name="Home" />
          <NavItem name="Course" />
        </View>


        <View style={styles.search} className='' />
        <MaterialCommunityIcons size={24} accessibilityHint='close' name='menu' color={color.onSurface} />

      </View>
    </>);
};



const getStyles = (color: ColorType) => StyleSheet.create({
  navContainer: {
    // backgroundColor: color.$surfaceContainer,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 60,
    paddingHorizontal: 60,
    [breakPoint]: {
      paddingHorizontal: 2,
    }
  },
  logo: {

    backgroundColor: color.surfaceContainerHighest,


  },
  navItemContainer: {
    flexDirection: "row"
  },
  search: {
    backgroundColor: color.surfaceDim,
    height: 30,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 20
  },
  navItem: { margin: 10, flexDirection: "row", alignItems: "flex-end" },
})






export default Nav;
