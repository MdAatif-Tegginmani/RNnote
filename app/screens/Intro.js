import React, { useState } from 'react'
import { View, StatusBar, Dimensions, Text, StyleSheet, TextInput } from 'react-native'
import colors from '../misc/colors'
import RoundIconBtn from '../components/RoundIconBtn'

const Intro = () => {
    const [user, setUser] = useState()
    const handleText = (text) => setUser(text)




    return (
        <>
            <StatusBar hidden />
            <View style={styles.container}>
                <Text style={styles.inputTitle}>
                    Enter Your Name To Continue
                </Text>
                <TextInput value={user} onChangeText={handleText} placeholder='Enter Name ' style={styles.textInput} />
                {
                    user.trim().length >3 ? <RoundIconBtn antIconName="arrowright" /> : null} // 19.47
            </View>
        </>
    )
}


const width = Dimensions.get('window').width - 50
console.log(width)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",


    },
    textInput: {
        borderWidth: 2,
        color: colors.PRIMARY,
        borderColor: colors.PRIMARY,
        width,
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 25,
        marginBottom: 15,



    },
    inputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 25,
        marginBottom: 5,
        opacity: 0.5,




    }



})



export default Intro