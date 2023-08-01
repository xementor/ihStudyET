import * as React from 'react';
import StyleSheet from 'react-native-media-query';
import { breakPoint } from '../../constants/style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, Pressable } from 'react-native'

import { ColorType } from '@/constants/theming/types';
import useTheme from '@/constants/theming/useTheme';
import { Link } from 'expo-router';
import clsx from 'clsx';
import { Hoverable, P } from '../Themed';
import { IconButton, Searchbar, Tooltip } from 'react-native-paper';



type NavProps = {
  onHamberge?: () => void
}

const Nav = ({ onHamberge }: NavProps) => {
  const { colors: color } = useTheme()
  const { styles, ids } = getStyles(color)
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  function NavItem({ name }: { name: string }) {
    return (
      <Link href="/(tabs)/course" >
        <Tooltip title={name}>
          <Hoverable
            style={styles.navItem}
            dc='bg-gray-200 rounded-lg p-1'
            hoveredStyle='bg-blue-200'
          >
            <MaterialCommunityIcons size={24} accessibilityHint='close' name={name == "Course" ? "book" : "home"} color={color.onSurface} />
            <Text style={{ color: color.onSurface }}>{name}</Text>
          </Hoverable>
        </Tooltip>

      </Link>
    );
  }


  return (
    <>
      <View className='my-4 flex flex-row px-2 sm:px-16 justify-between items-center'>
        <Hoverable
          dc='bg-blue-400 w-20 h-8 rounded-lg sm:w-36 flex items-center justify-center'
          hoveredStyle='bg-blue-600'
        >

          <Text
            className={
              clsx(
                'text-center ',
                ' text-base font-bold text-white',
              )}
          >
            ihStudy
          </Text>
        </Hoverable>

        <View className='hidden sm:flex sm:flex-row'>
          <NavItem name="Home" />
          <NavItem name="Course" />
        </View>


        <Searchbar
          // className='flex-1 ml-10'
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

        <IconButton
          size={24}
          icon='menu'
          iconColor={color.onSurface}
          onPress={onHamberge}
        />

      </View >
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
