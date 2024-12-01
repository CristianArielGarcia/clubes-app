import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSupabase } from "../components/SupabaseContext";

const Login = () => {
  const navigate = useNavigate();
  const supabase = useSupabase();

  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") {
      navigate("/success");
    }
    //navigate("/Login");
  });

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
