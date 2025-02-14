import { useState } from "react";
import { TextDeliveryFormData } from "../../types";
import "./NewDeliveryForm.css";

interface NewTextDeliveryFormProps {
  onSubmit: (deliveryData: TextDeliveryFormData) => void;
}

const NewTextDeliveryForm: React.FC<NewTextDeliveryFormProps> = ({
  onSubmit,
}) => {
  const [deliveryData, setDeliveryData] = useState<TextDeliveryFormData>({
    text: "",
  });

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
          Enviar
        </button>
      </div>
    </form>
  );
};

export default NewTextDeliveryForm;
