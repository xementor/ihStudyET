import React, { useRef, useState } from 'react'
import { View, Text } from 'app/design/styled'
import { Platform } from 'react-native'
import { styled } from 'nativewind'

import CourseCover from 'app/components/CourseCover'
import Nav from 'app/components/web/NavBar'
import StreakBoard from 'app/components/StreakBoard'
import { useAppSelector } from 'app/services/hooks/hook'
import LoginScreen from 'app/features/auth/login/login-screen'

export const HomeScreen = () => {
  const [loading, setLoading] = useState(true)
  const { user } = useAppSelector((state) => state.user)

  const [visible, setVisible] = React.useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const toggleModal = () => setVisible(!visible)
  const containerStyle = { backgroundColor: 'white', padding: 20, top: 10 }

  const targetRef = useRef(null)

  // if (!user) {
  //   return <LoginScreen />
  // }

  return (
    <>
      {Platform.OS === 'web' && (
        <>
          <Nav onHamberge={toggleModal} />
          <>
            {/* <Portal>
              <StyledModal
                visible={visible}
                onDismiss={hideModal}
                className="absolute  top-[-200px] w-80 flex-none"
                contentContainerStyle={containerStyle}
              >
                <Text>Example Modal. Click outside this area to dismiss.</Text>
              </StyledModal>
            </Portal> */}
          </>
        </>
      )}

      <View className="md:p-10">
        {user && <Text>{user.email}</Text>}
        <StreakBoard />
        <Text className="my-4 text-2xl font-bold">Your course history</Text>

        {/* <View className="flex flex-row flex-wrap"> */}
        <CourseCover hasButton={true} />
        {/* </View> */}
      </View>
    </>
  )
}
