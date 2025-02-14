import { useState } from "react";
import "./NewDeliveryForm.css";

export interface DeliveryData {
  text: string;
}

interface NewDeliveryFormProps {
  onSubmit: (deliveryData: DeliveryData) => void;
}

const NewDeliveryForm: React.FC<NewDeliveryFormProps> = ({ onSubmit }) => {
  const [deliveryData, setDeliveryData] = useState<DeliveryData>({ text: "" });

  const changeDeliveryData = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDeliveryData((deliveryData) => ({
      ...deliveryData,
      [event.target.id]: event.target.value,
    }));
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(deliveryData);
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="form__group">
        <label htmlFor="text">Respuesta:</label>
        <textarea
          rows={5}
          cols={80}
          className="form__control"
          id="text"
          value={deliveryData.text}
          onChange={changeDeliveryData}
        />
      </div>
      <div className="form__group">
        <button className="button button--solid" type="submit">
          Entregar
        </button>
      </div>
    </form>
  );
};

export default NewDeliveryForm;
