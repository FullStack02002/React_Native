import { FontAwesome } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: "#4CAF50",
          drawerInactiveTintColor: "gray",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home title",
            drawerLabel: "Home Label",
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="settings"
          options={{
            title: "Setting title",
            drawerLabel: "Setting Label",
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="cog" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="dashboard"
          options={{
            title: "Dashboard title",
            drawerLabel: "Dashboard Label",
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="dashboard" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}