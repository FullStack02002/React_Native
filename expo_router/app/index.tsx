import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Link href="/about">Go to About</Link>
      <Link href="/profile">Go to profile</Link>
      <Link href="/products">Go to products</Link>
     
      <Link href="/products/deals/black-friday/playstation-5">PlayStation 5 (Deals)</Link>
      <Link href="/products/search/playstation-5">PlayStation 5 (Search)</Link>
      <Link href="/missing-route">Missing Route</Link>
       <Link href="/products/best-sellers/playstation-5" asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>PlayStation 5 (Best Sellers)</Text>
      </Pressable>
      </Link>
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});