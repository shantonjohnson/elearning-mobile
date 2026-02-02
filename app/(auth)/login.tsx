import { View, TextInput, Button, Text, Pressable } from "react-native";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.replace("/(tabs)");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 12, borderWidth: 1, padding: 8, borderRadius: 5 }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 12, borderWidth: 1, padding: 8, borderRadius: 5 }}
      />

      <Button title="Login" onPress={signIn} />

      <Pressable onPress={() => router.push("/register")} style={{ marginTop: 20 }}>
        <Text style={{ color: "blue", textAlign: "center" }}>
          Don't have an account? Register
        </Text>
      </Pressable>
    </View>
  );
}
