import { createClient } from "@supabase/supabase-js";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  import.meta.env.VITE_DB_BASE_URL ?? "",
  import.meta.env.VITE_SUPABASE_KEY ?? ""
);

const Login = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") {
      navigate("/success");
    }
    //navigate("/Login");
  });

  /**
   * Handles the sign in using Google OAuth.
   *
   * @param {React.FormEvent<HTMLFormElement>} e The form event.
   *
   * @returns {Promise<void>}
   */
  async function googleSignIn(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Error signing in:", error);
    }
  }

  return (
    <div className="Login">
      <Auth
        supabaseClient={supabase}
        theme="dark"
        providers={["google"]}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  );
};

export default Login;
