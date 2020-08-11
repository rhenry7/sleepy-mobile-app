import TrackPlayer from 'react-native-track-player';

module.exports = async function() {

  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play()
    console.log("play");
  })

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause()
    console.log("pause");
  });

  TrackPlayer.addEventListener('remote-next', () => {
    TrackPlayer.skipToNext()
    console.log("skipToNext");
  });

  TrackPlayer.addEventListener('remote-previous', () => {
    TrackPlayer.skipToPrevious()
    console.log("skipToPrevious");
  });

  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.destroy()
    console.log("stop");
  });

};