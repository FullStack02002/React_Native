import { Slot } from "expo-router"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View>
        <Text>My Expo App</Text>
      </View>
      <Slot/>
      <View>
        <Text>Gaj Singh</Text>
      </View>
    </SafeAreaView>
  )
}
