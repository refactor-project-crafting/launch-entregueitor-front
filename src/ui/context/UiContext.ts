import { createContext } from "react";
import { UiContextValue } from "./types";

const UiContext = createContext<UiContextValue>({} as UiContextValue);

export default UiContext;
