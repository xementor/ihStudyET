import * as React from 'react'
import { View, Text, Pressable } from 'app/design/styled'
import { HeroOutline } from '@nandorojo/heroicons'
import { Link } from 'solito/link'

type NavProps = {
  onHamberge?: () => void
}

const Nav = ({ onHamberge }: NavProps) => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = (query: string) => setSearchQuery(query)

  function NavItem({ name }: { name: string }) {
    return (
      <Link href="/(tabs)/course">
        <View className="mx-2 items-center justify-between rounded-lg bg-blue-200 p-1 hover:bg-blue-200">
          <HeroOutline.Bookmark color={'red'} />
          <Text className="text-black hover:text-white">{name}</Text>
        </View>
      </Link>
    )
  }

  return (
    <>
      <View className="mb-4 flex flex-row items-center justify-between bg-red-300 px-2 sm:px-16">
        <Pressable className="flex h-8 w-20 items-center justify-center rounded-lg bg-blue-400 hover:bg-blue-600 sm:w-36">
          <Text className="text-center text-base hover:text-red-200">
            ihStudy
          </Text>
        </Pressable>

        <View className="flex-row sm:flex sm:flex-row">
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
        <HeroOutline.Home />
      </View>
    </>
  )
}

export default Nav
