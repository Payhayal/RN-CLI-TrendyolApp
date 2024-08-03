import React from 'react';
import {SafeAreaView, Text, StyleSheet, Pressable} from 'react-native';
import COLORS from '../../theme/colors';
import {widgetHeaderProps} from '../../models/components/widgetHeaderProps';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';

const WidgetHeader: React.FC<widgetHeaderProps> = ({
  widgetTitle,
  seeAll,
  category,
}) => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.widgetTitle}>{widgetTitle} </Text>
      {seeAll && (
        <Pressable
          onPress={() =>
            navigation.navigate(PRODUCTLIST, {category: category})
          }>
          <Text style={styles.seeAll}> See All </Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginVertical: 15,
  },
  widgetTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  seeAll: {
    fontSize: 16,
    color: COLORS.PRIMARY,
  },
});

export default WidgetHeader;
