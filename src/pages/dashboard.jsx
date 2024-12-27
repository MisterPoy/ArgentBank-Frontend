import React, { useEffect, useState } from "react";
import EditUserForm from "../components/editUserForm/editUserForm";
import "./dashboard.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/reducers/userSlice";
import accountList from "../data/accountsList.json";
import { AccountItem } from "../components/accountItem/accountItem";

export function DashBoard() {
  const { userName, firstName, lastName, isLoggedIn } = useSelector(
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
    console.log("Opening edit user form");
    setIsOpen(true);
  };
  const handleCloseEditUserForm = () => {
    console.log("Closing edit user form");
    setIsOpen(false);
  };

  return (
    <main className="main bg-dark">
      {isOpen ? (
        <EditUserForm handleCloseEditUserForm={handleCloseEditUserForm}
        userName={userName}
        firstName={firstName}
        lastName={lastName} />
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

      {accountList.map((account) => (
        // map sur accountList pour créer les composant account dynamiquement
        <AccountItem
          key={account.id}
          title={account.title}
          amount={account.amount}
          amountDescription={account.amountDescription}
        />
      ))}
    </main>
  );
}
