import React, { useRef, useState } from "react";
import { View, Text, Platform } from "react-native";
import { Modal, PaperProvider, Portal } from "react-native-paper";
import { styled } from "nativewind";

import CourseCover from "@/components/CourseCover";
import Nav from "@/components/web/NavBar"
import StreakBoard from "@/components/StreakBoard";
import { useAppSelector } from "../hook";
import LoginScreen from "../login";


const CoursesScreen = () => {

  const [loading, setLoading] = useState(true)
  const { user } = useAppSelector((state) => state.user);


  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const toggleModal = () => setVisible(!visible)
  const containerStyle = { backgroundColor: 'white', padding: 20, top: 10 };

  const StyledModal = styled(Modal,)
  const targetRef = useRef(null);



  // if (!user) {
  //   return <LoginScreen />
  // }

  return (
    <PaperProvider>
      {Platform.OS === "web" &&
        <>
          <Nav onHamberge={toggleModal} />
          <>

            <Portal>
              <StyledModal
                visible={visible} onDismiss={hideModal}
                className="w-80  absolute top-[-200px] flex-none"

                contentContainerStyle={containerStyle}
              >
                <Text>Example Modal.  Click outside this area to dismiss.</Text>
              </StyledModal>
            </Portal>
          </>
        </>

      }

      <View className="p-2 md:p-10">
        {user && <Text>{user.email}</Text>}
        <StreakBoard />
        <Text className="text-2xl font-bold my-4">Your course history</Text>

        {/* <View className="flex flex-row flex-wrap"> */}
        <CourseCover hasButton={true} />
        {/* </View> */}
      </View>
    </PaperProvider>
  );
}




export default CoursesScreen;