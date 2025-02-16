import { useParams, useSearchParams } from "react-router";
import useExercisesQuery from "../../../exercise/queries/useExercisesQuery";
import ExercisesList from "../../../exercise/components/ExercisesList/ExercisesList";
import { useAuthContext } from "../../../../auth/AuthContext/useAuthContext";

const DeliveriesPage: React.FC = () => {
  const { role } = useAuthContext();
  const { challenge } = useParams<{ challenge: string }>();
  const students = import.meta.env.VITE_STUDENTS.split(",").map((student) =>
    student.split("||")
  );
  const [searchParams] = useSearchParams();

  const challengeNumber = Number(challenge?.split("-")[1]);
  const student = searchParams.get("student");

  const studentName = students.find(
    ([, studentId]) => studentId === student
  )?.[0];

  const { data: exercises } = useExercisesQuery(challengeNumber);

  return (
    <>
      <h2>
        Entregas reto {challengeNumber}
        {role === "admin" && <span> - {studentName}</span>}{" "}
      </h2>
      {exercises && <ExercisesList exercises={exercises} />}
    </>
  );
};

export default DeliveriesPage;
