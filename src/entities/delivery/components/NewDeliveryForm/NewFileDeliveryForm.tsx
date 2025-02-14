import { useState } from "react";
import "./NewDeliveryForm.css";

interface NewFileDeliveryFormProps {
  onSubmit: (deliveryData: FormData) => void;
}

const NewFileDeliveryForm: React.FC<NewFileDeliveryFormProps> = ({
  onSubmit,
}) => {
  const [file, setFile] = useState<File | null>(null);

  const changeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files!;

    if (selectedFiles.length > 0) {
      setFile(selectedFiles[0]);
    }
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="form__group">
        <label htmlFor="file">Archivo:</label>
        <input
          type="file"
          className="form__control"
          id="file"
          onChange={changeFile}
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
