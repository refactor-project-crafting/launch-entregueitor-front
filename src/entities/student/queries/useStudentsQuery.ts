import { useQuery } from "@tanstack/react-query";
import { fetchWithAuth } from "../../../client/axios";
import { Student } from "../types";
import { useAuthContext } from "../../../auth/AuthContext/useAuthContext";

export const useStudentsQuery = () => {
  const { role } = useAuthContext();

  return useQuery({
    queryKey: ["students", role],
    queryFn: async () => {
      if (role !== "admin") {
        return [];
      }

      const { data } = await fetchWithAuth<{
        students: Student[];
      }>("/students");

      return data.students;
    },
    staleTime: 5000,
  });
};
