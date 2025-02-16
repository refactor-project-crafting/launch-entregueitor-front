import { Outlet } from "react-router";
import Protected from "../../../auth/components/Protected/Protected";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import { useAuthContext } from "../../../auth/AuthContext/useAuthContext";
import Loading from "../../Loading/Loading";
import "./Layout.css";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

const Layout: React.FC = () => {
  const { isLoggedIn } = useAuthContext();
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    <>
      <div className="container">
        <Header />
        {isLoggedIn && <Navigation />}
        <div className="main-block">
          <main className="main-content">
            <Protected>
              <Outlet />
            </Protected>
          </main>
        </div>
      </div>
      <Footer />
      {(isFetching || isMutating) && <Loading />}
    </>
  );
};

export default Layout;
