import { Outlet } from "react-router";
import Protected from "../../../auth/components/Protected/Protected";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import { useAuthContext } from "../../../auth/AuthContext/useAuthContext";
import Loading from "../../Loading/Loading";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import useUiContext from "../../../ui/context/useUiContext";
import Feedback from "../../Feedback/Feedback";
import "./Layout.css";

const Layout: React.FC = () => {
  const { isLoggedIn } = useAuthContext();
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const { isShowingFeedback } = useUiContext();

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
      {isShowingFeedback && <Feedback />}
      {(isFetching > 0 || isMutating > 0) && <Loading />}
    </>
  );
};

export default Layout;
