import { View, Text, Button, Alert } from "react-native";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function Profile() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const user = supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null);
    });
  }, []);

  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Logout failed", error.message);
    }
    // RootLayout will auto-redirect
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 12 }}>Profile</Text>

      <Text style={{ fontSize: 16, marginBottom: 30 }}>
        {email ? `Logged in as\n${email}` : "Loading user..."}
      </Text>

      <Button title="Logout" color="red" onPress={logout} />
    </View>
  );
}
