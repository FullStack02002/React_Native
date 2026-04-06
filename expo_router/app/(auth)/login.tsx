import { Button } from '@react-navigation/elements'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Login() {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button  onPress={()=>router.replace("/profile")}>Login</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    }
})