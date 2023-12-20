import React, {useState} from 'react';
import {Modal, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../Constants/Colors';
import AuthButton from '../UISupport/AuthButton';
import MaIcon from '../Icon/MaIcon';
import Icon from 'react-native-vector-icons/FontAwesome5';
const PopUpModel = props => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={props.visible}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00000059',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '35%',
              width: '90%',
              backgroundColor: Colors.white,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: '40%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: Colors.bgGray,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="exclamation" color={Colors.blue} size={50} />
              </View>
            </View>
            <View
              style={{
                height: '30%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{color: Colors.black, fontSize: 20, fontWeight: 'bold'}}>
                Oops
              </Text>
              <Text
                style={{color: Colors.black, fontSize: 15, fontWeight: '600'}}>
                {props.message}
              </Text>
            </View>
            <View
              style={{
                height: '25%',
                width: '80%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AuthButton title="OK" onPress={props.onPress} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PopUpModel;
