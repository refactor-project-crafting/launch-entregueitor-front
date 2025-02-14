import React from "react";
import NewTextDeliveryForm from "../NewDeliveryForm/NewTextDeliveryForm";
import { useAddDeliveryMutation } from "../../mutations/deliveriesMutations";
import { Exercise } from "../../../exercise/types";
import { FullDeliveryFormData } from "../../types";
import "./NewDelivery.css";
import NewUrlDeliveryForm from "../NewDeliveryForm/NewUrlDeliveryForm";
import NewFileDeliveryForm from "../NewDeliveryForm/NewFileDeliveryForm";

interface NewDeliveryProps {
  exercise: Exercise;
  onCreated: () => void;
}

const NewDelivery: React.FC<NewDeliveryProps> = ({ exercise, onCreated }) => {
  const { mutateAsync } = useAddDeliveryMutation();

  const createNewDelivery = async (deliveryData: FullDeliveryFormData) => {
    await mutateAsync({
      deliveryData,
      type: exercise.type,
      challenge: exercise.challenge,
      position: exercise.position,
      exerciseId: exercise.id,
    });

    onCreated();
  };

  const buildForm = () => {
    switch (exercise.type) {
      case "text":
        return <NewTextDeliveryForm onSubmit={createNewDelivery} />;
      case "url":
        return <NewUrlDeliveryForm onSubmit={createNewDelivery} />;
      case "file":
        return <NewFileDeliveryForm onSubmit={createNewDelivery} />;
    }
  };

  return (
    <div className="new-delivery">
      <h2>Nueva entrega:</h2>
      {buildForm()}
    </div>
  );
};

export default NewDelivery;
