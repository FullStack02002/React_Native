import { Link, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function index() {
    return (
        <>
            <Stack.Screen options={{ title: "Not Found" }} />
            <View style={styles.container}>
                <Text>Custom Not Found Page</Text>
                <Link href="/">Go Back To Home Page</Link>
            </View>
        </>
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