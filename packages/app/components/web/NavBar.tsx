import * as React from 'react'
import { View, Text, Pressable } from 'react-native'

import useTheme from 'app/design/theming/useTheme'
import clsx from 'clsx'
import { Hoverable, P } from '../Themed'

type NavProps = {
  onHamberge?: () => void
}

const Nav = ({ onHamberge }: NavProps) => {
  const { colors: color } = useTheme()
  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = (query: string) => setSearchQuery(query)

  function NavItem({ name }: { name: string }) {
    return (
      // <Link href="/(tabs)/course">
      <Hoverable
        className="h-20 items-center justify-between"
        dc="bg-gray-200 rounded-lg p-1"
        hoveredStyle="bg-blue-200"
      >
        {/* <MaterialCommunityIcons
              size={24}
              accessibilityHint="close"
              name={name == 'Course' ? 'book' : 'home'}
              color={color.onSurface}
            /> */}
        <Text style={{ color: color.onSurface }}>{name}</Text>
      </Hoverable>
      // </Link>
    )
  }

  return (
    <>
      <View className="my-4 flex flex-row items-center justify-between px-2 sm:px-16">
        <Hoverable
          dc="bg-blue-400 w-20 h-8 rounded-lg sm:w-36 flex items-center justify-center"
          hoveredStyle="bg-blue-600"
        >
          <Text
            className={clsx('text-center ', ' text-base font-bold text-white')}
          >
            ihStudy
          </Text>
        </Hoverable>

        <View className="hidden sm:flex sm:flex-row">
          <NavItem name="Home" />
          <NavItem name="Course" />
        </View>

        {/* <Searchbar
          // className='flex-1 ml-10'
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        /> */}

        {/* <IconButton
          size={24}
          icon="menu"
          iconColor={color.onSurface}
          onPress={onHamberge}
        /> */}
      </View>
    </>
  )
}

export default Nav