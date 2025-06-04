import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";


const Profile = () => {
  const user = useContext(UserContext);

  return (
    <div className="profile-container">
      <h2>Hello, {user.name}</h2>
      <p>Logged In: {user.loggedIn.toString()}</p>
    </div>
  );
};

export default Profile;
