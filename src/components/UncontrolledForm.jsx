import React, { useRef } from "react";
function UncontrolledForm() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    console.log("First Name", firstName);
    console.log("Last Name", lastName);
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <h3>Uncontrolled form </h3>
        <label>First Name</label>
        <input type="text" ref={firstNameRef} placeholder="Your name..." />
        <br />
        <label>Last Name</label>
        <input type="text" ref={lastNameRef} placeholder="Your last name..." />
        <br />
        <input className="input-submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default UncontrolledForm;
