import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Sip } from '../../assets';
import { colors, fonts } from '../../utils';

const Splashscreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login')
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Sip} style={{width: 150, height: 150}} resizeMode='contain' />
      <Text style={styles.text}>PT. Tri-Saudara Sentosa Industri</Text>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 18, color: colors.primary, fontFamily: fonts.medium}
});