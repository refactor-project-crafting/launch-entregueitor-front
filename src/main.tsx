import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRouter from "./router/AppRouter";
import queryClient from "./client/queryClient";
import "@fontsource-variable/roboto-flex/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
