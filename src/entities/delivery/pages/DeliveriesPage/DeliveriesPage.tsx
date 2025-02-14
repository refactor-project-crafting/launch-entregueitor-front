import { useParams } from "react-router";
import DeliveriesList from "../../components/DeliveriesList/DeliveriesList";
import { useDeliveriesQuery } from "../../queries/useDeliveriesQuery";
import useExercisesQuery from "../../../exercise/queries/useExercisesQuery";
import ExercisesList from "../../../exercise/components/ExercisesList/ExercisesList";

const DeliveriesPage: React.FC = () => {
  const { challenge } = useParams<{ challenge: string }>();
  const challengeNumber = Number(challenge?.split("-")[1]);

  const { data: exercises } = useExercisesQuery(challengeNumber);
  const { data: deliveries } = useDeliveriesQuery(challengeNumber);

  return (
    <>
      <h2>Entregas reto {challengeNumber}</h2>
      {exercises && <ExercisesList exercises={exercises} />}
    </>
  );
};

export default DeliveriesPage;
