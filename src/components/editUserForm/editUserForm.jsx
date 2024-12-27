import React from "react";
import "./EditUserForm.css";
import { Button } from "../button/button";

const EditUserForm = ({
  handleCloseEditUserForm,
  userName,
  firstName,
  lastName,
}) => {
  return (
    <div className="edit-user-Form_container">
      <h1>Edit User Info</h1>
      <form className="edit-user-form">
        <div className="User-input_form input-wrapper">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            defaultValue={userName}
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
        <div className="edit-user-buttons">
          <Button type="submit" className="edit-button" content="Save" onClick={undefined} />

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