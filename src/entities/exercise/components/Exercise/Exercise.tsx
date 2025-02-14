import { NavLink } from "react-router";
import { Exercise } from "../../types";
import "./Exercise.css";

interface ExerciseProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseProps> = ({ exercise }) => {
  return (
    <div className="exercise">
      <header className="exercise__header">
        <h4 className="exercise__name">{exercise.name}</h4>
        <NavLink to="/deliveries/new?challenge=2&position=1" className="button">
          Entregar
        </NavLink>
      </header>
    </div>
  );
};

export default ExerciseCard;
