import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../../components'
import { colors, fonts } from '../../utils'

const Home = () => {
  return (
    <View style={styles.page}>
      <Header title="Dashboard" subTitle="Welcome Username" />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.number}>100</Text>
          <Text style={styles.label}>Total Box</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.number}>99</Text>
          <Text style={styles.label}>Total PO</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.number}>7</Text>
          <Text style={styles.label}>Total DO</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.number}>20</Text>
          <Text style={styles.label}>Total Asset</Text>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.secondary_white},
  container: {
    padding: 24,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
    marginBottom: 24,
    borderRadius:10,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  number: {fontFamily: fonts.medium, color: colors.primary, fontSize: 18},
  label: {fontFamily: fonts.regular, color: colors.secondary, fontSize: 12},
})