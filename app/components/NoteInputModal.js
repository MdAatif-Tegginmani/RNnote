import { View, Text, Modal, StatusBar, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import colors from '../misc/colors'

const NoteInputModal = ({ visible }) => {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleModalClose = () => {
    Keyboard.dismiss();
  }



  return (
    <>
      <StatusBar hidden></StatusBar>
      <Modal visible={visible} animationType='fade' >
        <View style={styles.contianer}>
          <TextInput
            placeholder='Title'

            style={[styles.input, styles.title]}>
          </TextInput>
          <TextInput
            multiline
            placeholder='Note'
            style={[styles.input, styles.desc]}></TextInput>
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBg, StyleSheet.absoluteFillObject]}></View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  )
}
const styles = StyleSheet.create({
  contianer: {
    paddingHorizontal: 20,
    paddingTop: 15,

  },
  input: {

    borderBottomColor: colors.PRIMARY,
    fontSize: 20,
    borderBottomWidth: 2,
    color: colors.DARK,

  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: 'bold',

  },
  desc: {
    height: 100,

  },
  modalBg: {
    flex: 1,
    zIndex: -1,


  }


})

export default NoteInputModal