import { Exercise } from "../../types";
import NewDelivery from "../../../delivery/components/NewDelivery/NewDelivery";
import { useState } from "react";
import { useDeliveriesQuery } from "../../../delivery/queries/useDeliveriesQuery";
import DeliveriesList from "../../../delivery/components/DeliveriesList/DeliveriesList";
import "./ExerciseCard.css";
import { useSearchParams } from "react-router";

interface ExerciseProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseProps> = ({ exercise }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [searchParams] = useSearchParams();

  const student = searchParams.get("student");

  const { data: deliveries } = useDeliveriesQuery(
    exercise.challenge,
    exercise.id,
    student
  );

  const toggleFormOpen = () => {
    setIsFormOpen((isFormOpen) => !isFormOpen);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="exercise">
      <header className="exercise__header">
        <h4 className="exercise__name">{exercise.name}</h4>
        <button className="button" onClick={toggleFormOpen}>
          Entregar
        </button>
      </header>
      <p className="exercise__comments">{exercise.comments}</p>
      {deliveries && <DeliveriesList deliveries={deliveries} />}
      {isFormOpen && <NewDelivery exercise={exercise} onCreated={closeForm} />}
    </div>
  );
};

export default ExerciseCard;
