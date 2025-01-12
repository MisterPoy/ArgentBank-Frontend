import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { logout } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import "./header.css";

// Header component - Main navigation and authentification status
export function Header() {
  // get user data from Redux store
  const { isLoggedIn, userName, lastName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Check for token when changing pages and update if if needed
  useEffect(() => {
    // Check if token is absent but isLoggedIn is true
    const token = localStorage.getItem("token");
    if (!token && isLoggedIn) {
      dispatch(logout());
    }
  }, [location, dispatch, isLoggedIn]);

  // Handle user logout
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/"); // Redirect to home page after logout
  };

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
      {/* Navigation menu */}
      <nav className="main-nav-item">
        {isLoggedIn ? (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "main-nav-item active-link" : "main-nav-item"
              }
            >
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
