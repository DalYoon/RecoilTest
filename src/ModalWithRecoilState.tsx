import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {atom, useRecoilState} from 'recoil';

export const isVisibleAtom = atom({
  key: '@modal/isVisibleAtom',
  default: false,
});

const ModalWithRecoil = () => {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleAtom);

  useEffect(() => {
    console.log('isVisible(recoil state): ', isVisible);
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

export default ModalWithRecoil;
