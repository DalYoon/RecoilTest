import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

interface IProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const ModalWithLocalState: FC<IProps> = ({isVisible, setIsVisible}) => {
  useEffect(() => {
    console.log('isVisible(local state): ', isVisible);
  }, [isVisible]);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => {
        setIsVisible(false);
        console.log('on backdrop press fired');
      }}>
      <View style={styles.card}>
        <Text>Modal With Local State</Text>

        <TouchableOpacity onPress={() => setIsVisible(false)}>
          <View style={styles.btn}>
            <Text style={styles.whiteFont}>Close</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {backgroundColor: '#000', padding: 16},
  whiteFont: {color: '#fff'},
});

export default ModalWithLocalState;
