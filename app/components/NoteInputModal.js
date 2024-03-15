import { View, Text ,Modal,StatusBar ,TextInput, StyleSheet } from 'react-native'
import React from 'react'

const NoteInputModal = ({visible}) => {
  return (
    <>
    <StatusBar hidden></StatusBar>
    <Modal visible={visible}  animationType='fade' >
    <TextInput style={[styles.input , styles.title]}></TextInput>
    <TextInput style={[styles.input , styles.desc]}></TextInput>
    </Modal>
    </>
  )
}
const styles = StyleSheet.create({
    
})

export default NoteInputModal