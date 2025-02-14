import { Delivery, FullDelivery } from "../../types";
import DeliveryCard from "../DeliveryCard/DeliveryCard";
import "./DeliveriesList.css";

interface DeliveriesListProps {
  deliveries: Delivery[];
}

const DeliveriesList: React.FC<DeliveriesListProps> = ({ deliveries }) => {
  return (
    <ul className="deliveries">
      {deliveries.map((delivery) => (
        <li key={delivery.id}>
          <DeliveryCard delivery={delivery as FullDelivery} />
        </li>
      ))}
    </ul>
  );
};

export default DeliveriesList;
