import * as React from 'react';
import StyleSheet from 'react-native-media-query';
import { breakPoint } from '../../constants/style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native'

import { ColorType } from '@/constants/theming/types';
import useTheme from '@/constants/theming/useTheme';

const Nav = () => {
  const { colors: color } = useTheme()
  const { styles, ids } = getStyles(color)

  function NavItem() {
    return (
      <View style={styles.navItem}>
        <MaterialCommunityIcons size={24} accessibilityHint='close' name='home' color={color.onSurface} />
        <Text style={{ color: color.onSurface }}>Home</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.navContainer} dataSet={{ media: ids.navContainer }}>
        {/* <View sx={{ ...styles.navContainer, backgroundColor: "$error" }} dataSet={{ media: ids.navContainer }}> */}

        <View style={styles.logo}>
          Logo
        </View>

        <View style={styles.navItemContainer}>
          <NavItem />
          <NavItem />
        </View>


        <View style={styles.search}>Search</View>
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
    height: 30,
    width: 170,
    backgroundColor: color.surfaceContainerHighest,
    borderRadius: 10,
    marginRight: 20,

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
