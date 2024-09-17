import React, { useState, useEffect } from "react";

function UserData() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/3")
      .then((response) => response.json())
      .then((data) => {
        setUser(data); // Зберігаємо отримані дані в стані
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-form">
      <h3>Request to the server</h3>
      {user ? (
        <div>
          <p>
            Name:
            <br /> {user.name}
          </p>
          <p>
            Email:
            <br /> {user.email}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserData;
