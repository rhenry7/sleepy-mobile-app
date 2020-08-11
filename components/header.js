import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 11,
    backgroundColor: 'blue',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  // styling for text, and for image.

  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 100 / 2,
  // },
});


export default Header;
