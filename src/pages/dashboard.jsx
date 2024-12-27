import React, { useEffect, useState } from "react";
import EditUserForm from "../components/editUserForm/editUserForm";
import "./dashboard.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/reducers/userSlice";
import accountList from "../data/accountsList.json";
import { AccountItem } from "../components/accountItem/accountItem";
import { Button } from "../components/button/button";

export function DashBoard() {
  const { userName, firstName, lastName, isLoggedIn } = useSelector(
    (state) => state.user
  );

  //hook pour gérer ouverture et fermeture modale
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //verifier la présence du token au chargement de la page
  useEffect(() => {
    const token = localStorage.getItem("token"); // Récupérer le token

    if (!token) {
      navigate("/signin"); // Redirige vers signIn si l'utilisateur n'a pas le token
    } else if (!isLoggedIn) {
      dispatch(fetchUserProfile()); // Dispatch fetchUserProfile si le token est présent
    }
  }, [navigate, dispatch]);

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
        <EditUserForm
          handleCloseEditUserForm={handleCloseEditUserForm}
          userName={userName}
          firstName={firstName}
          lastName={lastName}
        />
      ) : (
        <div className="welcomeUser-container">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName} !
          </h1>
          <Button
            className="edit-button"
            onClick={handleEditName}
            content="Edit name"
          />
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
