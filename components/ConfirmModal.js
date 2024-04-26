import React from 'react';
import { Modal, Text, Pressable, View } from 'react-native';
import styles from '../styles/confirmModal.style';

export default function ConfirmModal(props) {
  const { text, openModal, setOpenModal, callback } = props;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{text}</Text>
            <View style={styles.buttons}>
              <Pressable
                style={[styles.button, styles.buttonYes]}
                onPress={() => {
                  callback()
                  setOpenModal(false)
                }}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonNo]}
                onPress={() => {
                  setOpenModal(false)
                }}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};