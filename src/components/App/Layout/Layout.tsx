import { Outlet } from "react-router";
import "./Layout.css";
import Protected from "../../../auth/components/Protected/Protected";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import { useAuthContext } from "../../../auth/AuthContext/useAuthContext";

const Layout: React.FC = () => {
  const { isLoggedIn } = useAuthContext();

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
    </>
  );
};

export default Layout;
