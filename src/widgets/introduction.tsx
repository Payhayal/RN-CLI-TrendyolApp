import React from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';
import {height, width} from '../utils/constants';
import COLORS from '../theme/colors';

const Introduction: React.FC = () => {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/2.png')} />
      {/* <Image style={styles.image} source={require('../assets/images/1.png')} /> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: COLORS.WHITE,
  },
  text: {
    fontSize: 10,
  },
  image: {
    width: width - 10,
    height: height * 0.22,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default Introduction;
