import { Slot } from "expo-router"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View>
        <Text>Profile Route Header</Text>
      </View>
      <Slot/>
      <View>
        <Text>Profile Route Footer</Text>
      </View>
    </SafeAreaView>
  )
}
