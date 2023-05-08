

import React, {useState, useEffect, useRef} from 'react';
import { Button, View , StyleSheet,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import SignUp from './src/screens/SignUp'
import PushNotification from './src/screens/PushNotification'
import { fontSize } from './src/Utilities/fonts';
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();
function DrawerView() {
  return (
    <View style={{backgroundColor:"black",height:"100%",width:"118.5%"}}>
      <Text style={{fontSize:fontSize.fourteen,color:"white",fontWeight:"bold"}}>Drawer View</Text>
    </View>
  );
}

const App =()=> {
  const [progress, setprogress] = React.useState(new Animated.Value(0));


  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1.5],
    outputRange: [1, 0.65],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 45],
  });

  const animatedStyle = {
    ...styles.shadow1,
    borderRadius,
    transform: [{scale}],
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator 
       contentContainerStyle={{flex: 1}}
       drawerType="back"
       overlayColor="transparent"
      //  initialRouteName="DrawerStack"
       drawerPosition={'left'}
       // drawerType="back"
       // screenOptions={TransitionScreenOptions}
       drawerStyle={styles.drawerstyle1}
       sceneContainerStyle={styles.sceneContainerStyle}
       drawerContent={props => {
        setTimeout(() => {
          // console.log(props?.progress);
          setprogress(props.progress);
        }, 0);
       return <DrawerView navigation={props.navigation} />
       }}
      >
      <Drawer.Screen name="Home" options={{headerShown: false}}>
        {props => <PushNotification {...props} drawerAnimationStyle={animatedStyle} />}
      </Drawer.Screen>     
      <Drawer.Screen name="Setting" options={{headerShown: false}}>
        {props => <SignUp {...props} drawerAnimationStyle={animatedStyle} />}
      </Drawer.Screen> 
         {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import SignUp from './src/screens/SignUp'
// import PushNotification from './src/screens/PushNotification'

// const App = () => {
//   return (
//    <PushNotification/>
//   )
// }

 export default App

const styles = StyleSheet.create({
  drawerstyle1: {
    //   drawerContentOptions={{

    width: '63%',

    backgroundColor: 'transparent',
  },
  sceneContainerStyle: {
    // backgroundColor: "rgba(0,0,0,0.9)",

    backgroundColor: 'transparent',
  },
  shadow1: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 35,
  },
})