import { useQuery } from "@tanstack/react-query";
import { fetchWithAuth } from "../../../client/axios";
import { Exercise } from "../types";

const useExercisesQuery = (challenge: number) => {
  return useQuery({
    queryKey: ["exercises", challenge],
    queryFn: async () => {
      const { data } = await fetchWithAuth<{ exercises: Exercise[] }>(
        `/exercises/${challenge}`
      );

      return data.exercises;
    },
  });
};

export default useExercisesQuery;
