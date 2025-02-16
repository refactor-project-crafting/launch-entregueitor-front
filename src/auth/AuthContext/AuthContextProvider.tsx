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
  const [publishedChallengeNumber, setPublishedChallengeNumber] = useState(0);

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

  useEffect(() => {
    (async () => {
      if (user?.user_metadata.user_name) {
        await flagsmith.identify(user.user_metadata.user_name);
        setPublishedChallengeNumber(
          Number(flagsmith.getValue("challenge-number"))
        );
      }
    })();
  }, [flagsmith, user]);

  const contextValue: AuthContextStructure = useMemo(
    () => ({
      isLoggedIn: !!user?.id,
      username: user?.user_metadata.user_name ?? "",
      userMaxChallenge: publishedChallengeNumber,
      role:
        user?.user_metadata.user_name === "the-refactor-project"
          ? "admin"
          : "student",
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
