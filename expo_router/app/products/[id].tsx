import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductDetails() {
    const { id } = useLocalSearchParams();
    return (
        <>
        <Stack.Screen options={{ title: `Product ${id}` }} />
            <View style={styles.container}>
                <Text>Details of Product id {id}</Text>
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