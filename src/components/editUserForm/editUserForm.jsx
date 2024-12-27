import React from "react";
import "./EditUserForm.css";

const EditUserForm = ({ handleCloseEditUserForm }) => {
  return (
    <div className="edit-user-Form_container">
      <h1>Edit User Info</h1>
      <form className="edit-user-form">
        <div className="User-input_form input-wrapper">
          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName" name="userName" />
        </div>
        <div className="User-input_form input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value="John"
            readOnly
          />
        </div>
        <div className="User-input_form input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value="Doe"
            readOnly
          />
        </div>
        <div className="edit-user-buttons">
          <button className="edit-button" type="button">
            Save
          </button>
          <button className="edit-button" type="button" onClick={handleCloseEditUserForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
