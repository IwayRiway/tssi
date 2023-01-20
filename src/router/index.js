import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home, Login, Splashscreen } from '../pages';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splashscreen" component={Splashscreen} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default Router;