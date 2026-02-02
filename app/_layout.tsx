import { Stack, Redirect } from "expo-router";
import { View } from "react-native";
import { AuthProvider, useAuth } from "@/context/AuthContext";

function RootNavigation() {
  const { session, loading } = useAuth();

  if (loading) {
    return <View />;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return <Redirect href="/(tabs)" />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
      <RootNavigation />
    </AuthProvider>
  );
}
