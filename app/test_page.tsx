import Nav from '@/components/web/NavBar';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  StatusBar,
  Button,
} from 'react-native';

import { UL, LI, A } from "@expo/html-elements"

const MyScrollingComponent = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const HEADER_MAX_HEIGHT = 150; // Set your desired maximum height for the top bar
  const HEADER_MIN_HEIGHT = 60;  // Set your desired minimum height for the top bar
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Nav />

      <View
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Dropdown button
        {/* <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg> */}
      </View>

      <View id="dropdown" className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <UL className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <LI>
            <A href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</A>
          </LI>
          <li>
            <A href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</A>
          </li>
        </UL>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: 3
    // Add other styles as needed
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    // Add other styles as needed
  },
  contentText: {
    padding: 20,
    fontSize: 16,
    lineHeight: 24,
    // Add other styles as needed
  },
});

export default MyScrollingComponent;
