import { createContext } from "react";
import { AdminContextValue } from "./types";

const AdminContext = createContext<AdminContextValue>({} as AdminContextValue);

export default AdminContext;
