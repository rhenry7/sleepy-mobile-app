import React, {Component, Fragment} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import TrackPlayer from 'react-native-track-player'; // initializes the player
import {startPlayer} from './components/player.js';
import {render} from 'react-dom';

export function App() {
    
//   console.log('start app')
  async function mainPlay() {
    
    await TrackPlayer.setupPlayer().then(() => {
      // The player is ready to be used
      console.log('player is setup');
    });
    TrackPlayer.registerPlaybackService(() => require('./components/service.js'));
    TrackPlayer.updateOptions({
        //   console.log('update options'),
        // test 
          stopWithApp: true,
          capabilities: [
              TrackPlayer.CAPABILITY_PLAY,
              TrackPlayer.CAPABILITY_PAUSE,
              TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
              TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
              TrackPlayer.CAPABILITY_STOP,
          ],
          compactCapabilities: [
              TrackPlayer.CAPABILITY_PLAY,
              TrackPlayer.CAPABILITY_PAUSE,
          ],
      });
    // await TrackPlayer.play();

    async (playApp) => {
      console.log('The app is playing');
      const playerState = await TrackPlayer.getState();

      if (playerState !== TrackPlayer.STATE_PLAYING) {
        startPlayer();
      } else {
        TrackPlayer.pause();
      }
    };
;
  }

  render();
  const playText = this.state.isPlaying ? 'Pause' : 'Play';
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={styles.buttonSection}>
        <View>
          <Text style={styles.playText} onPress={() => this.playWhiteNoise()}>
            {playText}
          </Text>
        </View>
      </View>
    </Fragment>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  description: {
    width: '80%',
    marginTop: 20,
    textAlign: 'center',
  },
  player: {
    marginTop: 40,
  },
  state: {
    marginTop: 20,
  },
  buttonSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  playText: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
  },
});

export default App;
