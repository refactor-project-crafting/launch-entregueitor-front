import { Link, NavLink, useParams, useSearchParams } from "react-router";
import { useAuthContext } from "../../auth/AuthContext/useAuthContext";
import "./Navigation.css";

const Navigation: React.FC = () => {
  const challengeNumbers = [1, 2, 3, 4] as const;
  const students = import.meta.env.VITE_STUDENTS.split(",").map((student) =>
    student.split("||")
  );

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
            <li key={student[1]}>
              <Link
                to={`/deliveries/challenge-${challengeNumber}?student=${student[1]}`}
              >
                {student[0]}
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
