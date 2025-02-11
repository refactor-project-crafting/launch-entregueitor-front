export interface AuthContextStructure {
  isLoggedIn: boolean;
  username: string;
  login: () => void;
  logout: () => void;
}
