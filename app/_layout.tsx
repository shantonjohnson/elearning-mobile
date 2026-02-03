import { Stack, Redirect } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { AuthProvider, useAuth } from "@/context/AuthContext";

function RootNavigator() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 🚪 Not logged in → auth screens
  if (!session) {
    return <Redirect href="/(auth)/login" />;
  }

  // ✅ Logged in → app
  return <Redirect href="/(tabs)" />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
      <RootNavigator />
    </AuthProvider>
  );
}
