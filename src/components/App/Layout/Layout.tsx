import { Outlet } from "react-router";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="main-block">
          <main className="main-content">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
