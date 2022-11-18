import React, { useState } from "react";
import axios from "axios";
// import { useAuth } from "../state/index";
import { state, useSnapshot } from "../state/index";

function enroll() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employee, setEmployee] = useState("");
  // const [getAuth, changeAuth] = useAuth("auth");
  const submit = (e: any) => {
    e.preventDefault();
    // changeAuth("auth", true);
    const data = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      empID: employee,
      email: email,
    };
    axios({
      method: "post",
      url: "https://calm-gray-penguin-hem.cyclic.app/add-user",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: data,
    })
      .then(function (response) {
        console.log(response);
        if (response.data.auth) {
          console.log(response.data._doc.firstName);
          console.log("Successs");
          //redirect the user to home page
          setFlag("Welcome🙂");
          state.auth = true;
          state.firstName = response.data._doc.firstName;
          state.lastName = response.data._doc.lastName;
          state.email = response.data._doc.email;
          state.empID = response.data._doc.empID;
        } else {
          setFlag("Invalid 😔");
          console.log("Fail");
          email;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="sign-in flex flex-col p-20 font-roboto  text-white ml-96">
      <h2 className="text-5xl">I do not have an account</h2>
      <p className="text-gray-500 mt-3">Sign Up with your email and password</p>
      <form className="flex flex-col" onSubmit={submit}>
        <h1>{flag}</h1>
        <label className="text-2xl mt-6 sign-in-label">Email</label>
        <input
          type="email"
          className=" sign-in-input "
          required
          autoComplete="on"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-2xl mt-6 sign-in-label">First Name</label>
        <input
          type="text"
          className="sign-in-input"
          required
          autoComplete="on"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="text-2xl mt-6 sign-in-label">Last Name</label>
        <input
          type="text"
          className="sign-in-input"
          required
          autoComplete="on"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="text-2xl mt-6 sign-in-label">Employee Id</label>
        <input
          type="text"
          className="sign-in-input"
          required
          autoComplete="on"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />
        <label className="text-2xl mt-6 sign-in-label">Password</label>
        <input
          type="text"
          className="sign-in-input"
          required
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form-button mt-12 w-3/6 flex">
          <button className="signIn-button">sign up</button>
          {/* <button className="google-button">sign in with google</button> */}
        </div>
      </form>
    </div>
  );
}

export default enroll;
