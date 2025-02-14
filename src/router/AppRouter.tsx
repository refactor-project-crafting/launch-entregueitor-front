import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import DeliveriesPage from "../entities/delivery/pages/DeliveriesPage/DeliveriesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import NewDeliveryPage from "../entities/delivery/pages/NewDeliveryPage/NewDeliveryPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/deliveries" />} />
        <Route
          path="deliveries"
          element={<Navigate to="/deliveries/challenge-1" />}
        />
        <Route path="deliveries/new" element={<NewDeliveryPage />} />
        <Route path="deliveries/:challenge" element={<DeliveriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
