import { Role } from "../types";

export interface AuthContextStructure {
  isLoggedIn: boolean;
  username: string;
  userMaxChallenge: number;
  role: Role;
  login: () => void;
  logout: () => void;
}
