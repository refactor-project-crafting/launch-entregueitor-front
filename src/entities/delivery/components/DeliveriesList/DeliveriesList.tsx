import { Delivery } from "../../types";

interface DeliveriesListProps {
  deliveries: Delivery[];
}

const DeliveriesList: React.FC<DeliveriesListProps> = ({ deliveries }) => {
  return (
    <>
      <h2>listado</h2>
      {deliveries.map((delivery) => delivery.name)}
    </>
  );
};

export default DeliveriesList;
