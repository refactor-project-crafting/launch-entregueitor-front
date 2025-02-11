import { Link } from "react-router";
import { LogoutButton } from "../../auth/components/Logout/Logout";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <Link to="/">
        <img
          src="/logo-the-refactor-project.svg"
          className="main-logo"
          alt="Logotipo de The Refactor Project"
          width="200"
          height="64"
        />
      </Link>
      <h1 className="main-title">Bootcamp de Programación Web Full Stack</h1>
      <LogoutButton />
    </header>
  );
};

export default Header;
