import TrackPlayer from 'react-native-track-player';

export const birds = {
    id: 'Birds',
    url: require('./resources/sounds/birds.wav'),
    title: 'Birds',
    // artwork: require('./resources/whitenoise.jpg'),
  };

export const crickets = {
    id: 'Crickets',
    url: require('./resources/sounds/crickets.wav'),
    title: 'Crickets',
    // artwork: require('./resources/whitenoise.jpg'),
  };

export const heavy_Rain = {
    id: 'Heavy Rain',
    url: require('./resources/sounds/heavy_rain.mp3'),
    title: 'Heavy Rain',
    // artwork: require('./resources/whitenoise.jpg'),
  };

export const rain = {
    id: 'Rain',
    url: require('./resources/sounds/rain_02.wav'),
    title: 'Rain',
    // artwork: require('./resources/whitenoise.jpg'),
  };

export const seagulls = {
    id: 'Seagulls',
    url: require('./resources/sounds/seagulls.wav'),
    title: 'Seagulls',
    // artwork: require('./resources/whitenoise.jpg'),
  };

export const soft_rain = {
    id: 'Soft Rain',
    url: require('./resources/sounds/soft_rain.wav'),
    title: 'Soft Rain',
    // artwork: require('./resources/whitenoise.jpg'),
  };

export const tropical = {
    id: 'Tropical',
    url: require('./resources/sounds/Tropical.wav'),
    title: 'Tropical',
    // artwork: require('./resources/whitenoise.jpg'),
  };

export const veil = {
    id: 'Veil',
    url: require('./resources/sounds/veil.mp3'),
    title: 'Veil',
    // artwork: require('./resources/whitenoise.jpg'),
  };

export const waves = {
    id: 'Waves',
    url: require('./resources/sounds/waves.wav'),
    title: 'Waves',
    // artwork: require('./resources/whitenoise.jpg'),
  };

export const wind = {
    id: 'Wind',
    url: require('./resources/sounds/wind.wav'),
    title: 'Wind',
    // artwork: require('./resources/whitenoise.jpg'),
  };

// export async function startPlayer() {
//     TrackPlayer.removeUpcomingTracks();
//     await TrackPlayer.add([birds, crickets, heavy_Rain, rain, seagulls, soft_rain, tropical, veil, waves, wind]).then(function()
//     // TrackPlayer.play();
//   });

/* 
the way it should work:
one track plays at a time, but multiple tracks can play at the same time to create a layered sound effect. 

not sure how to do that yet, will do later.
*/ 

export async function startPlayer(){

  await TrackPlayer.add([
    birds,
    crickets,
    heavy_Rain,
    rain,
    seagulls,
    soft_rain,
    tropical,
    veil,
    waves,
    wind,
  ]).then(function () {
    TrackPlayer.play();
    });
  

}



