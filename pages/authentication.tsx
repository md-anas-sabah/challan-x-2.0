import React from "react";
import Login from "../components/Login";
import SignIn from "../components/SignIn";

function authentication() {
  return (
    <div className=" flex flex-col text-white ml-96 ">
      <Login />
      <hr className="h-10 " />
      <SignIn />
    </div>
  );
}

export default authentication;
