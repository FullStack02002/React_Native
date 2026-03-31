import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Link href="/about">Go to About</Link>
      <Link href="/profile">Go to profile</Link>
      <Link href="/products">Go to products</Link>
      <Link href="/products/best-sellers/playstation-5">PlayStation 5 (Best Sellers)</Link>
      <Link href="/products/deals/black-friday/playstation-5">PlayStation 5 (Deals)</Link>
      <Link href="/products/search/playstation-5">PlayStation 5 (Search)</Link>
    </View>
  );
}