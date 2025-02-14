import { useState } from "react";
import { FileDeliveryFormData } from "../../types";
import "./NewDeliveryForm.css";

interface NewFileDeliveryFormProps {
  onSubmit: (deliveryData: FileDeliveryFormData) => void;
}

const NewFileDeliveryForm: React.FC<NewFileDeliveryFormProps> = ({
  onSubmit,
}) => {
  const [deliveryData, setDeliveryData] = useState<FileDeliveryFormData>({
    filename: "",
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
        <label htmlFor="url">Respuesta:</label>
        <input
          type="file"
          className="form__control"
          id="filename"
          value={deliveryData.filename}
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

export default NewFileDeliveryForm;
