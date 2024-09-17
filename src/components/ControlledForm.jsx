import React, { useState } from "react";

const ControlledForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log(firstName);
  console.log(lastName);

  return (
    <div className="container-form">
      <form>
        <h3>Controlled form </h3>
        <label>
          First Name
          <input
            type="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your name..."
          />
        </label>
        <br />
        <label>
          Last Name
          <input
            type="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Your last name..."
          />
        </label>
        <br />
        <input className="input-submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default ControlledForm;
