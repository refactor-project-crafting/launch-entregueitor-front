import { PropsWithChildren } from "react";
import LoginWithGitHub from "../LoginWithGitHub/LoginWithGitHub";
import { useAuthContext } from "../../AuthContext/useAuthContext";

const Protected: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn) {
    return children;
  }

  return (
    <div className="login">
      <LoginWithGitHub />
    </div>
  );
};

export default Protected;
