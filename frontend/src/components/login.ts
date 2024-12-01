import { useSupabaseClient } from "@supabase/auth-helpers-react";

const supabase = useSupabaseClient();

async function googleSignIn(e) {
  e.preventDefault();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { scopes: "" }, //optional
  });
  if (error) {
    console.error("Error signing in:", error);
  }
}
