import { useQuery } from "@tanstack/react-query";
import { fetchWithAuth } from "../../../client/axios";
import { Exercise } from "../types";

const useExerciseQuery = (challenge: number, position: number) => {
  return useQuery({
    queryKey: ["exercise", challenge, position],
    queryFn: async () => {
      const { data } = await fetchWithAuth<{ exercise: Exercise }>(
        `/exercises/one?challenge=${challenge}&position=${position}`
      );

      return data.exercise;
    },
  });
};

export default useExerciseQuery;
