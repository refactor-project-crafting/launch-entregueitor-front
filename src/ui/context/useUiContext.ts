import { useContext } from "react";
import UiContext from "./UiContext";

const useUiContext = () => {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error("UiContext debe ser usado dentro de UiContextProvider");
  }

  return context;
};

export default useUiContext;
