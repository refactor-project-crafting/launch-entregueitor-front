import React from "react";
import useExerciseQuery from "../../../exercise/queries/useExerciseQuery";
import { useSearchParams } from "react-router";
import NewDeliveryForm, {
  DeliveryData,
} from "../../components/NewDeliveryForm/NewDeliveryForm";
import { useAddDeliveryMutation } from "../../mutations/deliveriesMutations";

const NewDeliveryPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const challenge = searchParams.get("challenge") ?? 1;
  const position = searchParams.get("position") ?? 1;

  const { data: exerciseData } = useExerciseQuery(
    Number(challenge),
    Number(position)
  );

  const { mutateAsync } = useAddDeliveryMutation();

  const createNewDelivery = async (deliveryData: DeliveryData) => {
    await mutateAsync({
      deliveryData,
      type: exerciseData?.type ?? "text",
      challenge: Number(challenge),
      position: Number(position),
      exerciseId: exerciseData!.id,
    });
  };

  if (!exerciseData) {
    return null;
  }

  return (
    <>
      <h2>Entrega {exerciseData.name}</h2>
      <NewDeliveryForm onSubmit={createNewDelivery} />
    </>
  );
};

export default NewDeliveryPage;
