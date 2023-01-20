import React from 'react'
import { StyleSheet, Text, TextInput as TextInputRN, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'
import { colors, fonts } from '../../utils'

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Masuk" subTitle="Silahkan masuk dengan akun sip anda" />
      <View style={styles.container}>
        <TextInput
          label="Username"
          placeholder="Masukkan Username Anda"
        />
        <Gap height={16} />
        <Text style={styles.label}>Password</Text>
        <View style={styles.login_style}>
          <TextInputRN
            style={styles.input}
            placeholder="Masukkan Password Anda"
            placeholderTextColor= {colors.secondary}
            secureTextEntry={true}
          />
        </View>
        <Gap height={24} />
        <Button text="Masuk" onPress={() => navigation.replace('Home')} />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.secondary_white},
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginTop: 24,
    flex: 1,
  },
  label: {fontSize: 16, fontFamily: fonts.regular, color: colors.primary},
  login_style: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 10 ,
    paddingHorizontal: 15,
  },
  input: {
    color: colors.secondary,
    flex: 1,
  },
  label2: {fontSize: 12, fontFamily: fonts.regular, color: colors.white}
})