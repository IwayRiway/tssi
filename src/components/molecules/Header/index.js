import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcBack } from '../../../assets';
import { colors, fonts } from '../../../utils';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {fontSize: 22, fontFamily: fonts.medium, color: colors.primary},
  subTitle: {fontSize: 14, fontFamily: fonts.light, color: colors.secondary},
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
});