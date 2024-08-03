import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {ButtonPropsTypes} from '../../models/components/button';
import COLORS from '../../theme/colors';

const Button: React.FC<ButtonPropsTypes> = props => {
  const {buttonType = 'outline', title} = props;

  if (buttonType == 'outline') {
    return (
      <Pressable {...props} style={styles.outlineContainer}>
        <Text style={styles.outlineTitle}>{title}</Text>
      </Pressable>
    );
  } else if (buttonType == 'full') {
    return (
      <Pressable {...props} style={styles.fullContainer}>
        <Text style={styles.fullTitle}>{title}</Text>
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  outlineContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    margin: 5,
    borderRadius: 5,
  },
  fullContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    backgroundColor: COLORS.PRIMARY,
    margin: 5,
    borderRadius: 5,
  },
  outlineTitle: {
    fontSize: 16,
    color: COLORS.PRIMARY,
    fontWeight: '500',
  },
  fullTitle: {
    fontSize: 16,
    color: COLORS.WHITE,
    fontWeight: '500',
  },
});

export default Button;
