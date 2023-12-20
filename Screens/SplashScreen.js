import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../Constants/Colors';
const SplashScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Animatable.View
        animation="slideInDown"
        duration={1500}
        style={{
          height: 200,
          width: 300,
          backgroundColor: Colors.white,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 150, width: 300, resizeMode: 'contain'}}
          source={require('../Assets/Images/logo.png')}
        />
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;
