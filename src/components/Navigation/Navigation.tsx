import { NavLink } from "react-router";
import "./Navigation.css";
import { useAuthContext } from "../../auth/AuthContext/useAuthContext";

const Navigation: React.FC = () => {
  const challengeNumbers = [1, 2, 3, 4] as const;
  const { userMaxChallenge } = useAuthContext();

  return (
    <nav className="main-navigation">
      <ul>
        {challengeNumbers.map((challengeNumber) => (
          <li
            key={challengeNumber}
            className={`main-navigation__number${
              challengeNumber < userMaxChallenge
                ? " main-navigation__number--passed"
                : ""
            }`}
          >
            {challengeNumber <= userMaxChallenge ? (
              <NavLink
                to={`/deliveries/challenge-${challengeNumber}`}
                className="challenge-number"
              >
                {challengeNumber}
              </NavLink>
            ) : (
              <button className="challenge-number" disabled>
                {challengeNumber}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
