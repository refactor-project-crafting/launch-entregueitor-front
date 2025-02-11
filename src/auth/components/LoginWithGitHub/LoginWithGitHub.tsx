import { useAuthContext } from "../../AuthContext/useAuthContext";

const LoginWithGitHub = () => {
  const { login, username } = useAuthContext();

  if (username) {
    return null;
  }

  return (
    <button className="signin" onClick={login}>
      Inicia sesión con GitHub
    </button>
  );
};

export default LoginWithGitHub;
