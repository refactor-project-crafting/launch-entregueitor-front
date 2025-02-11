import { createContext } from "react";
import { AuthContextStructure } from "./types";

const AuthContext = createContext<AuthContextStructure>(
  {} as AuthContextStructure
);

export default AuthContext;
