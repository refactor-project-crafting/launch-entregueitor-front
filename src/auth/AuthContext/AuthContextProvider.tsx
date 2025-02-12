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
import { useFlagsmith } from "flagsmith/react";

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const debug = useConsoleDebug();
  const flagsmith = useFlagsmith();
  const [user, setUser] = useState<User | null>(null);

  const publishedChallengeNumber = Number(
    flagsmith.getValue("challenge-number")
  );

  const login = async () => {
    await signInWithGitHub();
  };

  const logout = () => {
    signOut();
    setUser(null);
  };

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
      userMaxChallenge: publishedChallengeNumber,
      login,
      logout,
    }),
    [publishedChallengeNumber, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
