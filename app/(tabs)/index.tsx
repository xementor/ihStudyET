import { View, Text, Platform, Pressable } from "react-native";
import CourseCover from "@/components/CourseCover";
import Nav from "@/components/web/NavBar"
import StreakBoard from "@/components/StreakBoard";
import { Modal, PaperProvider, Portal } from "react-native-paper";
import React from "react";
import { styled } from "nativewind";


const CoursesScreen = () => {

  const [visible, setVisible] = React.useState(true);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const toggleModal = () => setVisible(!visible)
  const containerStyle = { backgroundColor: 'white', padding: 20, top: 10 };

  const StyledModal = styled(Modal,)

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