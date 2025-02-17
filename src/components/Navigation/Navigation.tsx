import { Link, NavLink, useParams, useSearchParams } from "react-router";
import { useAuthContext } from "../../auth/AuthContext/useAuthContext";
import useAdminContext from "../../admin/context/useAdminContext";
import "./Navigation.css";

const Navigation: React.FC = () => {
  const challengeNumbers = [1, 2, 3, 4] as const;
  const { students } = useAdminContext();

  const [searchParams] = useSearchParams();

  const student = searchParams.get("student");

  const { userMaxChallenge, role } = useAuthContext();
  const { challenge } = useParams<{ challenge: string }>();

  const challengeNumber = Number(challenge?.split("-")[1]);

  return (
    <nav className="main-navigation">
      {role === "admin" && (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <Link
                to={`/deliveries/challenge-${challengeNumber}?student=${student.id}`}
              >
                {student.name ?? student.username.split("@")[0]}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ul>
        {challengeNumbers.map((challengeNumber) => (
          <li
            key={challengeNumber}
            className={`main-navigation__number${
              challengeNumber < userMaxChallenge && role === "student"
                ? " main-navigation__number--passed"
                : ""
            }`}
          >
            {challengeNumber <= userMaxChallenge || role === "admin" ? (
              <NavLink
                to={`/deliveries/challenge-${challengeNumber}${
                  role === "admin" ? "?student=" + student : ""
                }`}
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
