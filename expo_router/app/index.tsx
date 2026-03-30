import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home Screen</Text>

      <Link href="/about">Go to About</Link>
      <Link href="/profile">Go to profile</Link>
      <Link href="/products">Go to products</Link>
    </View>
  );
}