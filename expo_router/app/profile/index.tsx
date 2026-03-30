import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Profile() {
    return (
        <>
        <Stack.Screen options={{title:"Profile"}}/>
        <View>
            <Text>Profile Screen</Text>
        </View>
        </>
    );
}