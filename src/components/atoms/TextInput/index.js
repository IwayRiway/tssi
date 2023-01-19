import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import { colors, fonts } from '../../../utils';

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.secondary}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: fonts.regular, color: colors.primary},
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 10,
    color: colors.primary,
  },
});