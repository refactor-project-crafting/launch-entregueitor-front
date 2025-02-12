import { useParams } from "react-router";
import DeliveriesList from "../../components/DeliveriesList/DeliveriesList";
import { useDeliveriesQuery } from "../../queries/useDeliveriesQuery";
import { useEffect, useState } from "react";

const DeliveriesPage: React.FC = () => {
  const [challengeNumber, setChallengeNumber] = useState<number>();

  const { data } = useDeliveriesQuery(challengeNumber || 1);
  const { challenge } = useParams<{ challenge: string }>();

  useEffect(() => {
    if (challenge) {
      setChallengeNumber(Number(challenge.split("-")[1]));
    }
  }, [challenge]);

  return (
    <>
      <h2>Deliveries</h2>
      {data && <DeliveriesList deliveries={data} />}
    </>
  );
};

export default DeliveriesPage;
