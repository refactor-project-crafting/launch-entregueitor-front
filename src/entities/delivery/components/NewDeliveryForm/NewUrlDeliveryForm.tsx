import { useState } from "react";
import { UrlDeliveryFormData } from "../../types";
import "./NewDeliveryForm.css";

interface NewUrlDeliveryFormProps {
  onSubmit: (deliveryData: UrlDeliveryFormData) => void;
}

const NewUrlDeliveryForm: React.FC<NewUrlDeliveryFormProps> = ({
  onSubmit,
}) => {
  const [deliveryData, setDeliveryData] = useState<UrlDeliveryFormData>({
    url: "",
  });

  const changeDeliveryData = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
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
        <label htmlFor="url">URL:</label>
        <input
          type="url"
          className="form__control"
          id="url"
          value={deliveryData.url}
          onChange={changeDeliveryData}
        />
      </div>
      <div className="form__group">
        <button className="button button--solid" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default NewUrlDeliveryForm;
