import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React ,{useEffect} from 'react'
import messaging from '@react-native-firebase/messaging'
import Animated from 'react-native-reanimated';
import { fontSize } from '../Utilities/fonts';

const PushNotification = ({props, navigation, drawerAnimationStyle}) => {

  const requestUserPermission = async ()=>{
    const authStatus = await messaging.requestPermission();
    console.log("authorization status(authstatus)",authStatus);
    return(
      authStatus ===messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus ===messaging.AuthorizationStatus.PROVISIONAL
    );
  }
  useEffect(() => {
    if(requestUserPermission()){
messaging().getToken().then((fcmToken)=>{
  console.log("FCM Token",fcmToken)
})
    }else {console.log("Not Authorization status",authStatus)}
   
  }, []);
  console.log("qq",drawerAnimationStyle);
  return (
    <Animated.View style={{ flex: 1,
      ...drawerAnimationStyle,
      overflow: 'hidden',
      backgroundColor: 'silver'}}>
      <TouchableOpacity onPress={()=>{
        navigation.openDrawer()
        console.log(props);
      }}>
      <Text style={{fontSize:fontSize.eightteen,marginTop:10}}>  Push Notification</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default PushNotification

const styles = StyleSheet.create({})