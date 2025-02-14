import axios from "axios";
import { supabase } from "../auth/supabase/supabase";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchWithAuth = async <Type>(
  url: string,
  method: "get" | "post" | "put" | "patch" | "delete" = "get",
  body?: unknown
) => {
  const { data: sessionData } = await supabase.auth.getSession();
  const token = sessionData.session?.access_token;

  const config = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...(method !== "get" && method !== "delete" ? { data: body } : {}),
  };

  const response = await axiosInstance.request<Type>({
    url,
    ...config,
  });

  return response;
};
