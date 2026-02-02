import { View, Text, Button, Alert } from "react-native";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";

export default function Profile() {
  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    // Redirect to login after logout
    router.replace("/login");
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Profile</Text>

      <Button title="Logout" onPress={handleLogout} color="red" />
    </View>
  );
}
