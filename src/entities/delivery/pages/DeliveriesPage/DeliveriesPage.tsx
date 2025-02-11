import DeliveriesList from "../../components/DeliveriesList/DeliveriesList";
import { useDeliveriesQuery } from "../../queries/useDeliveriesQuery";

const DeliveriesPage: React.FC = () => {
  const { data } = useDeliveriesQuery();

  return (
    <>
      <h2>Deliveries</h2>
      {data && <DeliveriesList deliveries={data} />}
    </>
  );
};

export default DeliveriesPage;
