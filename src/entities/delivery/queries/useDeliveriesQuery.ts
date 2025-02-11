import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../client/axios";
import { Delivery } from "../types";
import { supabase } from "../../../auth/supabase/supabase";

export const useDeliveriesQuery = () => {
  return useQuery({
    queryKey: ["deliveries"],
    queryFn: async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData.session?.access_token;

      const { data } = await axiosInstance.get<{
        deliveries: Delivery[];
      }>("/deliveries", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data.deliveries;
    },
    staleTime: 5000,
  });
};
