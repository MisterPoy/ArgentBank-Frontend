import React, { useEffect, useState } from "react";
import EditUserForm from "../components/editUserForm/editUserForm";
import "./dashboard.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/reducers/userSlice";

export function DashBoard() {
  const { username, firstName, lastName, isLoggedIn } = useSelector(
    (state) => state.user
  );
  const token = localStorage.getItem("token");
  //hook pour gérer ouverture et fermeture modale
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //verifier la présence du token au chargement de la page
  useEffect(() => {
    if (!token) {
      navigate("/signIn");
    } else if (!isLoggedIn) {
      // dispatch fetchUserprofile si le token est présent
      dispatch(fetchUserProfile());
    }
  }, [token, navigate, isLoggedIn, dispatch]);

  const handleEditName = () => {
    setIsOpen(true);
  };
  const handleCloseEditUserForm = () => {
    setIsOpen(false);
  };

  return (
    <main className="main bg-dark">
      {isOpen ? (
        <EditUserForm handleCloseEditUserForm={handleCloseEditUserForm} />
      ) : (
        <div className="welcomeUser-container">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName} !
          </h1>
          <button className="edit-button" onClick={handleEditName}>
            Edit Name
          </button>
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}
