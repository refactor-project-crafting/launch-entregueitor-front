import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRouter from "./router/AppRouter";
import queryClient from "./client/queryClient";
import AuthContextProvider from "./auth/AuthContext/AuthContextProvider";
import { FlagsmithProvider } from "flagsmith/react";
import flagsmith from "./auth/flagsmith";
import "@fontsource-variable/roboto-flex/index.css";
import "./styles/styles.css";
import AdminContextProvider from "./admin/context/AdminContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FlagsmithProvider flagsmith={flagsmith}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthContextProvider>
            <AdminContextProvider>
              <AppRouter />
            </AdminContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </FlagsmithProvider>
  </StrictMode>
);
