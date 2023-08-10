import React, { useState, useRef } from 'react';
import { View, Alert, StyleSheet, Text } from 'react-native';
import YoutubePlayer, { PLAYER_STATES, YoutubeIframeRef } from 'react-native-youtube-iframe';

const YoutubeVideo = () => {
  const [playing, setPlaying] = useState(true);
  const [isMute, setMute] = useState(false);
  const controlRef = useRef<YoutubeIframeRef | null>(null);

  const onStateChange = (state: PLAYER_STATES) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('Video has finished playing!');
    }
    if (state !== 'playing') {
      setPlaying(false);
    }
  };

  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  };

  const seekBackAndForth = (control: string) => {
    console.log('currentTime');
    controlRef.current?.getCurrentTime().then((currentTime) => {
      control === 'forward'
        ? controlRef.current?.seekTo(currentTime + 15, true)
        : controlRef.current?.seekTo(currentTime - 15, true);
    });
  };

  const muteVideo = () => setMute(!isMute);

 



  return (
    <YoutubePlayer
      height={300}
      ref={controlRef}
      play={playing}
      mute={isMute}
      videoId={'84WIaK3bl_s'}
      onChangeState={onStateChange}
    />
  );
};



export default YoutubeVideo;
