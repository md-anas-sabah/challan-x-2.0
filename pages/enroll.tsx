import React, { useState } from "react";

function enroll() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employee, setEmployee] = useState("");
  const submit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="sign-in flex flex-col p-20 font-roboto  text-white ml-96">
      <h2 className="text-5xl">I do not have an account</h2>
      <p className="text-gray-500 mt-3">Sign Up with your email and password</p>
      <form className="flex flex-col" onSubmit={submit}>
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
          type="password"
          className="sign-in-input"
          required
          autoComplete="on"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="text-2xl mt-6 sign-in-label">Last Name</label>
        <input
          type="password"
          className="sign-in-input"
          required
          autoComplete="on"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="text-2xl mt-6 sign-in-label">Employee Id</label>
        <input
          type="password"
          className="sign-in-input"
          required
          autoComplete="on"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />
        <label className="text-2xl mt-6 sign-in-label">Password</label>
        <input
          type="password"
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
