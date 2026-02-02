// lib/supabase.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://lxqopkxozzwbqmlpogeu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_D9qEYw-mY0LgC30hsgmZdg_4aQ7vfCU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,     // use AsyncStorage instead of SecureStore
    autoRefreshToken: true,    // automatically refresh access token
    persistSession: true,      // persist session across app restarts
    detectSessionInUrl: false, // only needed for web
  },
});
