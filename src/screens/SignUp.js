import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {fontSize} from '../Utilities/fonts';
import {scalableheight} from '../Utilities/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignUp = ({props, navigation, drawerAnimationStyle}) => {
  const data = [
    {
      title: 'Full Name',
      placeholder: 'Enter full name',
      allow: true,
      icon: false,
    },

    {
      title: 'Email',
      placeholder: 'Enter email address',
      allow: true,
      icon: false,
    },
    {
      title: 'Phone Number',
      placeholder: 'Enter number here',
      allow: false,
      icon: false,
    },

    {
      title: 'Password',
      placeholder: 'Enter password here',
      allow: true,
      icon: true,
    },
    {
      title: 'Confirm Password',
      placeholder: 'Confirm password here',
      allow: true,
      icon: true,
    },
  ];
  const [passwordshow, setpasswordshow] = useState(false);

  return (
    <Animated.View style={[styles.main],{ flex: 1,
      ...drawerAnimationStyle,
      overflow: 'hidden',
      backgroundColor: '#F6F6F6'}}>
      <Text style={styles.Signuptext}>Sign Up</Text>
      {data.map((value, id) => {
        return (
          <>
            {value.allow ? (
              <View>
                <Text style={styles.text}>{value.title}</Text>
                <TextInput
                  style={styles.txtInput}
                  placeholder={value.placeholder}
                />
                {value.icon ? (
                  <TouchableOpacity
                    onPress={() => {
                      setpasswordshow(!passwordshow);
                    }}
                    style={styles.inputEye}>
                    <Ionicons
                      color={'#8c8c8c'}
                      name={passwordshow ? 'eye-off' : 'eye'}
                      size={fontSize.twentytwo}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            ) : (
              <View>
                <Text style={styles.text}>{value.title}</Text>
                <View style={styles.numinput}>
                  <Text style={[styles.text, {marginTop: 0}]}>+971</Text>
                  <TextInput
                    style={styles.txtInput2}
                    placeholder={value.placeholder}
                  />
                </View>
              </View>
            )}
          </>
        );
      })}
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.btntxt}>PROCEED</Text>
      </TouchableOpacity>
      <View style={styles.center}>
        <Text style={{fontSize: fontSize.fourteen}}>
          Already have an account?
        </Text>
        <TouchableOpacity>
          <Text style={styles.logintxt}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  main: {width: '92%', alignSelf: 'center', marginTop: scalableheight.three},
  Signuptext: {fontSize: fontSize.eightteen, fontWeight: '600', color: 'black'},
  text: {
    fontSize: fontSize.thirteen,
    color: 'black',
    opacity: 0.5,
    marginTop: scalableheight.two,
  },
  txtInput: {
    width: '100%',
    backgroundColor: '#F9F9F9',
    fontSize: fontSize.fifteen,
    color: '#8c8c8c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: fontSize.borderradiusmedium,
    height: scalableheight.seven,
    paddingHorizontal: scalableheight.two,
    alignSelf: 'center',
    marginTop: scalableheight.one,
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 3,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  txtInput2: {
    width: '85%',
    fontSize: fontSize.fifteen,
    color: '#8c8c8c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: fontSize.borderradiusmedium,
    height: scalableheight.seven,
    paddingHorizontal: scalableheight.two,
    alignSelf: 'center',
  },
  touchable: {
    height: scalableheight.seven,
    backgroundColor: '#f43e47',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: fontSize.borderradiusmedium,
    marginTop: scalableheight.onepointeightfive,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scalableheight.onepointeightfive,
  },
  btntxt: {color: 'white', fontWeight: 'bold'},
  logintxt: {
    marginTop: scalableheight.pointfive,
    color: '#f43e47',
    fontSize: fontSize.fourteen,
  },
  inputEye: {
    position: 'absolute',
    right: scalableheight.pointfive,

    justifyContent: 'center',
    alignSelf: 'center',

    marginTop: scalableheight.one,
    height: scalableheight.seven,
    paddingHorizontal: scalableheight.two,
    top: scalableheight.four,
  },
  numinput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scalableheight.one,
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 3,
    borderWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: '#F9F9F9',

    borderRadius: fontSize.borderradiusmedium,
  },
});
