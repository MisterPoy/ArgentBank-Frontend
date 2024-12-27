import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import { logout } from "../../redux/reducers/userSlice";
import { useNavigate } from "react-router";

export function Header() {
  const { isLoggedIn, firstName, lastName } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    // Exécute l'action logout pour mettre à jour l'état dans Redux
    dispatch(logout());
    console.log;
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
            <Link className="main-nav-item" to="/dashboard">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
            <Link onClick={handleLogOut} className="main-nav-item" to="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/signin" className="main-nav-item">
              <i className="fa fa-user-circle" />
              Sign In
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
