import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screen/RegisterScreen';
import HomeScreen from './screen/HomeScreen';
import BookDetail from './screen/BookDetail';
import { NavigationContainer } from '@react-navigation/native';
import CameraOpen from './screen/CameraOpen';
import TTS from './screen/TTSApi';
import STT from './screen/STTApi';
import CMND from './screen/CMNDApi';
import Random from './screen/RandomMath'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TTS" component={TTS} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={CameraOpen} options={{ headerShown: false }} />
        <Stack.Screen name="CMND" component={CMND} options={{ headerShown: false }} />
        <Stack.Screen name="STT" component={STT} options={{ headerShown: false }} />
        <Stack.Screen name="Random" component={Random} options={{ headerShown: false }} />
        <Stack.Screen 
          name="BookDetail" 
          component={BookDetail} 
          options={{ 
            title: 'Book Infomation',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: '#4838D1', 
            headerShadowVisible: true,
          }} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
