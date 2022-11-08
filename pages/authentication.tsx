import React from "react";
import Login from "../components/Login";
import SignIn from "../components/SignIn";

function authentication() {
  return (
    <div className=" flex text-white m-9">
      <Login />
      <SignIn />
    </div>
  );
}

export default authentication;
