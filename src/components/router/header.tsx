import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, Pressable} from 'react-native';
import {HeaderProps} from '../../models/router';
import {height, width} from '../../utils/constants';
import CustomInput from '../ui/customInput';
import COLORS from '../../theme/colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';

const Header: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <CustomInput placeHolder="Search products..." />
      </View>
      <View style={styles.iconContainer}>
        <Pressable style={styles.button}>
          <View>
            <SimpleLineIcons size={24} color={COLORS.PRIMARY} name="envelope" />
          </View>
        </Pressable>
        <Pressable style={styles.button}>
          <View>
            <LinearGradient
              colors={['#f74c06', '#f8a902']}
              style={styles.notificationBtn}>
              <Fontisto size={26} color={COLORS.WHITE} name="bell" />
            </LinearGradient>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.15,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 3,
    padding: 10,
  },
  iconContainer: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  notificationBtn: {
    borderRadius: 100,
    width: width * 0.1,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
