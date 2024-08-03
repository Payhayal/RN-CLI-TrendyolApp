import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {CustomInputProps} from '../../models/components/customInputProps';
import {height, width} from '../../utils/constants';
import COLORS from '../../theme/colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const CustomInput: React.FC<CustomInputProps> = ({placeHolder}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <EvilIcons size={30} color={COLORS.PRIMARY} name="search" />
      </View>
      <TextInput
        placeholder={placeHolder}
        style={styles.input}
        placeholderTextColor={COLORS.GRAY}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    position: 'absolute',
    zIndex: 99,
    width: width * 0.1,
    paddingLeft: 5,
  },
  input: {
    fontSize: 16,
    height: height * 0.047,
    width: width * 0.6,
    backgroundColor: COLORS.LIGHTGRAY,
    borderRadius: 20,
    padding: 10,
    paddingLeft: width * 0.1,
    marginVertical: 5,
    flex: 1,
  },
});

export default CustomInput;
