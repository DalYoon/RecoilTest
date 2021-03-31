import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import ModalWithLocalState from './ModalWithLocalState';
import ModalWithRecoilState, {isVisibleAtom} from './ModalWithRecoilState';

const Content = () => {
  const setIsVisibleRecoil = useSetRecoilState(isVisibleAtom);
  const [isVisibleLocal, setIsVisibleLocal] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Text>test recoil with modal</Text>

        <TouchableOpacity onPress={() => setIsVisibleRecoil(true)}>
          <View style={styles.btn}>
            <Text style={styles.whiteFont}>Open Modal With Recoil State </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsVisibleLocal(true)}>
          <View style={styles.btn}>
            <Text style={styles.whiteFont}>Open Modal With Local State</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ModalWithRecoilState />
      <ModalWithLocalState
        isVisible={isVisibleLocal}
        setIsVisible={setIsVisibleLocal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {backgroundColor: '#000', padding: 16, marginTop: 8},
  whiteFont: {color: '#fff'},
});

export default Content;
