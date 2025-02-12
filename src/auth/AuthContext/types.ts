export interface AuthContextStructure {
  isLoggedIn: boolean;
  username: string;
  userMaxChallenge: number;
  login: () => void;
  logout: () => void;
}
