import { StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import RoundIconBtn from '../components/RoundIconBtn'
import NoteInputModal from '../components/NoteInputModal'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../misc/colors'


const NoteScreen = ({ user }) => {
    const [greet, setGreet] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
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
                <SearchBar containerStyle={{ marginVertical: 15 }} />
                <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
                    <Text style={styles.emptyHeader}>Add Notes
                    </Text>
                    <RoundIconBtn onPress={() => console.log('opening model')} antIconName='plus' style={styles.addBtn} />
                </View>
            </View>
            <NoteInputModal visible={true} />
        </>




    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 22,
        fontWeight: 'bold',

    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    emptyHeader: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        opacity: 0.2,

    },
    emptyHeaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,

    },
    addBtn: {
        position: 'absolute',
        right: 15,
        bottom: 50,
    }

})

export default NoteScreen