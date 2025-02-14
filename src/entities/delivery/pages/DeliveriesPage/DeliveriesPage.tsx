import { useParams } from "react-router";
import DeliveriesList from "../../components/DeliveriesList/DeliveriesList";
import { useDeliveriesQuery } from "../../queries/useDeliveriesQuery";

const DeliveriesPage: React.FC = () => {
  const { challenge } = useParams<{ challenge: string }>();
  const challengeNumber = Number(challenge?.split("-")[1]);

  const { data } = useDeliveriesQuery(challengeNumber);

  return (
    <>
      <h2>Entregas reto {challengeNumber}</h2>
      {data && <DeliveriesList deliveries={data} />}
    </>
  );
};

export default DeliveriesPage;
