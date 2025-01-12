import React, { useEffect, useState } from "react";
import EditUserForm from "../components/editUserForm/editUserForm";
import "./dashboard.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/userSlice";
import accountList from "../data/accountsList.json";
import { AccountItem } from "../components/accountItem/accountItem";
import { Button } from "../components/button/button";

// Dashboard component - main user dashwoard after login
export function DashBoard() {
  // get user data from Redux store
  const { userName, firstName, lastName, isLoggedIn, status } = useSelector(
    (state) => state.user
  );

  // State to manage modal open/close
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Check for token presence and fetch user profile if needed
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin"); // Redirect to signin page if no token
    } else if (!isLoggedIn) {
      dispatch(fetchUserProfile()); // Fetch user profile if token exists but not logged in
    }
  }, [navigate, dispatch]);

  useEffect(() => {
    if (status === "failed") {
      navigate("/signin");
    }
  }, [status]);

  // handler to open edit user form
  const handleEditName = () => {
    setIsOpen(true);
  };

  // handler to close user form
  const handleCloseEditUserForm = () => {
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
        // Dynamically create AccounItem components from accountlist
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
