import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Splashscreen, Login, Home } from './pages';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Splashscreen/> */}
      {/* <Login /> */}
      <Home />
    </NavigationContainer>
  )
}

export default App