import { StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'

import { View, StyleSheet, Text } from 'react-native'
import colors from '../misc/colors'


const NoteScreen = ({ user }) => {
    const [greet, setGreet] = useState('')
    const findGreet = () => {
        const hrs = new Date().getHours()
        if (hrs === 0 || hrs < 12) return setGreet("Morning")
        if (hrs === 1 || hrs < 17) return setGreet("Afternoon")
        setGreet('Evening')
    }



    useEffect(() => {
        findGreet()
    }, [])

    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} ></StatusBar>
            <View style={styles.container}>
                <Text style={styles.header}>
                    {`Good ${greet} ${user.name}`}
                </Text>
            </View>
        </>




    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        fontWeight: 'bold',

    }
})

export default NoteScreen