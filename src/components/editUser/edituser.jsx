import React from 'react';
import "./EditUserForm.css"

const EditUserForm = () => {
  return (
    <div className='edit-user-Form'>
      <h1>Edit User Info</h1>
      <form>
        <div>
          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName" name="userName" />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value="John" readOnly />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value="Doe" readOnly />
        </div>
        <div>
          <button type="button">Save</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;