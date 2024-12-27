import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { logout } from "../../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { isLoggedIn, userName, lastName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    // Exécute l'action logout pour mettre à jour l'état dans Redux
    dispatch(logout());
    navigate("/"); // redirige vers la home page après déconnexion
  };
  /*   const location = useLocation(); // récupère l'url actuelle

  const isSignInPage = location.pathname === "/dashboard"; // vérifie si on est sur /signin */

  return (
    <header className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="/assets/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <nav className="main-nav-item">
        {isLoggedIn ? (
          <>
            <NavLink className="main-nav-item" to="/dashboard">
              <i className="fa fa-user-circle"></i>
              {userName}
            </NavLink>
            <NavLink onClick={handleLogOut} className="main-nav-item" to="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signin" className="main-nav-item">
              <i className="fa fa-user-circle" />
              Sign In
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
