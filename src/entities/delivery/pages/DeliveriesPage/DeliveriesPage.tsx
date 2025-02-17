import { useParams, useSearchParams } from "react-router";
import useExercisesQuery from "../../../exercise/queries/useExercisesQuery";
import ExercisesList from "../../../exercise/components/ExercisesList/ExercisesList";
import { useAuthContext } from "../../../../auth/AuthContext/useAuthContext";
import { useStudentsQuery } from "../../../student/queries/useStudentsQuery";
import { useEffect, useState } from "react";
import { Student } from "../../../student/types";

const DeliveriesPage: React.FC = () => {
  const { role } = useAuthContext();
  const { challenge } = useParams<{ challenge: string }>();
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [searchParams] = useSearchParams();

  const { data: apiStudents, isFetched } = useStudentsQuery();

  const challengeNumber = Number(challenge?.split("-")[1]);
  const student = searchParams.get("student");

  useEffect(() => {
    if (isFetched && apiStudents) {
      const whichStudent = apiStudents.find(
        (apiStudent) => apiStudent.id === student
      );

      if (!whichStudent) {
        return;
      }

      setSelectedStudent(whichStudent);
    }
  }, [apiStudents, isFetched, student]);

  const { data: exercises } = useExercisesQuery(challengeNumber);

  return (
    <>
      <h2>
        Entregas reto {challengeNumber}
        {role === "admin" && (
          <span>
            {" "}
            - {selectedStudent?.name ?? selectedStudent?.username.split("@")[0]}
          </span>
        )}{" "}
      </h2>
      {exercises && <ExercisesList exercises={exercises} />}
    </>
  );
};

export default DeliveriesPage;
