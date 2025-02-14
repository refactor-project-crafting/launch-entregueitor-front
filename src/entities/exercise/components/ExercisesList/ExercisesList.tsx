import { Exercise } from "../../types";
import ExerciseCard from "../Exercise/Exercise";
import "./ExercisesList.css";

interface ExercisesListProps {
  exercises: Exercise[];
}

const ExercisesList: React.FC<ExercisesListProps> = ({ exercises }) => {
  return (
    <ul className="exercises">
      {exercises.map((exercise) => (
        <li key={exercise.id}>
          <ExerciseCard exercise={exercise} />
        </li>
      ))}
    </ul>
  );
};

export default ExercisesList;
