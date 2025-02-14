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
            <NavLink to={`/deliveries/challenge-${challengeNumber}`}>
              {challengeNumber}
            </NavLink>
          </li>
        ))}
        <li className="main-navigation__text">
          <NavLink to="/deliveries/new?challenge=2&position=1">
            Entregar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
