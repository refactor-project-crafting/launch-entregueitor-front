import { useContext } from "react";
import AdminContext from "./AdminContext";

const useAdminContext = () => {
  const context = useContext(AdminContext);

  if (!context) {
    throw new Error("useAdminContext debe usarse dentro de AdminProvider");
  }

  return context;
};

export default useAdminContext;
