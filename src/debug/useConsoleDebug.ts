import { useCallback } from "react";
import { useAuthContext } from "../auth/AuthContext/useAuthContext";

const useConsoleDebug = () => {
  const { username } = useAuthContext();

  const debug = useCallback(
    (...messages: unknown[]): void => {
      if (
        window.location.host.includes("localhost") ||
        username === "the-refactor-project"
      ) {
        console.log(...messages);
      }
    },
    [username]
  );

  return debug;
};

export default useConsoleDebug;
