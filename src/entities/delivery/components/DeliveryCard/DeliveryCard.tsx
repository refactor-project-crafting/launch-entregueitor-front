import { useState } from "react";
import { FullDelivery } from "../../types";
import "./DeliveryCard.css";
import { Link } from "react-router";

interface DeliveryCardProps {
  delivery: FullDelivery;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({ delivery }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const toggleCardOpen = () => {
    setIsCardOpen((isCardOpen) => !isCardOpen);
  };

  const buildContent = () => {
    switch (delivery.type) {
      case "text":
        return (
          <>
            Respuesta:
            <pre>{delivery.text}</pre>
          </>
        );
      case "url":
        return (
          <>
            URL entregada:{" "}
            <Link to={delivery.url} target="_blank">
              {delivery.url}
            </Link>
          </>
        );
    }
  };

  return (
    <article className="delivery">
      <header className="delivery__header">
        {delivery.date.toLocaleString()}
        <button onClick={toggleCardOpen}>
          <img
            src="/caret.svg"
            alt="show/hide delivery"
            width="30"
            className={isCardOpen ? "caret-open" : ""}
          />
        </button>
      </header>
      {isCardOpen && <div className="delivery__content">{buildContent()}</div>}
    </article>
  );
};

export default DeliveryCard;
