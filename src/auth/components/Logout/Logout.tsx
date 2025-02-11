import { useAuthContext } from "../../AuthContext/useAuthContext";

export const LogoutButton = () => {
  const { logout, username } = useAuthContext();

  if (!username) {
    return null;
  }

  return (
    <button className="signout" onClick={logout}>
      Cerrar sesión
    </button>
  );
};
