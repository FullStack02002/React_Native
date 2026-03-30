import { Link, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function index() {
    return (
        <>
            <Stack.Screen options={{ title: "Products" }} />

            <View style={styles.container}>
                <Text>Products</Text>
                <Link href="/products/1">Product 1</Link>
                <Link href="/products/2">Product 2</Link>
                <Link href="/products/3">Product 3</Link>
                <Link href="/products/4">Product 4</Link>
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