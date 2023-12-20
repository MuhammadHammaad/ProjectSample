import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import Colors from '../../Constants/Colors';
import IoIcon from '../Icon/IoIcon';
import AuthButton from './AuthButton';

const SuccessModal = props => {
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
              height: '30%',
              width: '80%',
              backgroundColor: Colors.white,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IoIcon name="checkmark-circle" size={50} color={Colors.blue} />
            <Text
              style={{fontWeight: 'bold', fontSize: 20, color: Colors.black}}>
              Done
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 15,
                color: Colors.gray,
                textAlign: 'center',
                width: '95%',
              }}>
              {props.msg ? props.msg : 'Your ad will be live soon.'}
            </Text>
            <View style={{width: '90%', marginTop: 10}}>
              <AuthButton
                onPress={props.modelOff}
                title={props.title ? props.title : 'RETURN HOME'}
              />
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

export default SuccessModal;
