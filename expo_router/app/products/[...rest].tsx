import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductDetails() {
    const { rest } = useLocalSearchParams<{ rest: string[] }>();
    return (
        <>
            <View style={styles.container}>
                <Text>Catch All Product Details</Text>
                <Text>Details about product at {rest.join("/")}</Text>
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