import AsyncStorage from '@react-native-async-storage/async-storage';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Intro from './app/screens/Intro.js';

import { useEffect, useState } from 'react';
import NoteScreen from './app/screens/NoteScreen.js';


export default function App() {
const [user, setUser]= useState({})

  const findUser = async ()=>{
    const result = await AsyncStorage.getItem('user')
    if(result !== null){
      setUser(JSON.parse(result))

    }
    

  }
  
  
  useEffect(()=> {
    // findUser();
    AsyncStorage.clear()
  },[])

    if(!user.name) return <Intro onFinish={findUser} /> ;
 return <NoteScreen user={user}/> ;
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
