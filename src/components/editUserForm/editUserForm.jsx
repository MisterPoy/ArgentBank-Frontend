import React, { useState } from "react";
import "./EditUserForm.css";
import { Button } from "../button/button";
import { fetchUserProfile } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

// EdituserForm component - Allow users to edit their profile
const EditUserForm = ({
  handleCloseEditUserForm,
  userName,
  firstName,
  lastName,
}) => {

  // Local state for new username and potential errors
  const [newUserName, setNewUserName] = useState(userName);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
// API call to update username
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: newUserName }), // pour envoyer le nouveau nom d'utilisateur
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update username");
      }
      // Update global state with user profile
      dispatch(fetchUserProfile());

      // Close the edit form
      handleCloseEditUserForm();
    } catch (err) {
      setError("Failed to update username, please try again");
    }
  };

  return (
    <div className="edit-user-Form_container">
      <h1>Edit User Info</h1>
      <form className="edit-user-form" onSubmit={handleSubmit}>
        <div className="User-input_form input-wrapper">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)} // mettre à jour l'état de la valeur
            required
          />
        </div>
        <div className="User-input_form input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            style={{ color: "gray" }}
            readOnly
          />
        </div>
        <div className="User-input_form input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            style={{ color: "gray" }}
            readOnly
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="edit-user-buttons">
          <Button
            type="submit"
            className="edit-button"
            content="Save"
            onClick={undefined}
          />

          <Button
            className="edit-button"
            type="button"
            content="Cancel"
            onClick={handleCloseEditUserForm}
          />
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
