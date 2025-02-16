import { PropsWithChildren, useEffect } from "react";
import LoginWithGitHub from "../LoginWithGitHub/LoginWithGitHub";
import { useAuthContext } from "../../AuthContext/useAuthContext";
import { useNavigate, useParams } from "react-router";

const Protected: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoggedIn } = useAuthContext();
  const { challenge } = useParams<{ challenge: string }>();
  const { userMaxChallenge, role } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      const currentChallenge = Number(challenge?.split("-")[1]);

      if (role === "student" && currentChallenge > userMaxChallenge) {
        navigate("/deliveries/challenge-1");
      }
    }
  }, [challenge, isLoggedIn, navigate, userMaxChallenge, role]);

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
