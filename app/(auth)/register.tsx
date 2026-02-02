import { View, TextInput, Button, Text, Pressable } from "react-native";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created! Please login.");
    router.replace("/login"); // redirect to login after signup
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Register</Text>

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

      <Button title="Create Account" onPress={signUp} />

      <Pressable onPress={() => router.push("/login")} style={{ marginTop: 20 }}>
        <Text style={{ color: "blue", textAlign: "center" }}>
          Already have an account? Login
        </Text>
      </Pressable>
    </View>
  );
}
