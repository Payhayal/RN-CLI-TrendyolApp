import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import COLORS from '../../theme/colors';

const Spinner: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={COLORS.PRIMARY} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Spinner;
