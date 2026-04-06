import { Redirect, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Profile() {
    const isLoggedIn=false;

    if(!isLoggedIn){
        return <Redirect href="/login"/>
    }


    return (
        <>
        <Stack.Screen options={{title:"Profile"}}/>
        <View>
            <Text>Profile Screen</Text>
        </View>
        </>
    );
}