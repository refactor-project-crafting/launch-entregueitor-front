import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { AuthContextStructure } from "./types";
import AuthContext from "./AuthContext";
import {
  getAuthenticatedUser,
  signInWithGitHub,
  signOut,
} from "../supabase/supabase";
import useConsoleDebug from "../../debug/useConsoleDebug";
import { User } from "@supabase/supabase-js";

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const debug = useConsoleDebug();

  const login = async () => {
    await signInWithGitHub();
  };

  const logout = () => {
    signOut();
    setUser(null);
  };

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const user = await getAuthenticatedUser();
      debug(user);

      setUser(user);
    })();
  }, [debug]);

  const contextValue: AuthContextStructure = useMemo(
    () => ({
      isLoggedIn: !!user?.id,
      username: user?.user_metadata.user_name ?? "",
      login,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
