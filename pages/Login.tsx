import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const Login = () => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [data, setData] = useState();

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: "test.bosinfo.bs@gmail.com",
      password: "Test123456",
    });

    console.log(error);
  };

  useEffect(() => {
    signIn();
  }, []);

  return <div>Login Page</div>;
};

export default Login;
