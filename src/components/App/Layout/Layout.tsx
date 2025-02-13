import { Outlet } from "react-router";
import "./Layout.css";
import Protected from "../../../auth/components/Protected/Protected";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";

const Layout: React.FC = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Navigation />
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
