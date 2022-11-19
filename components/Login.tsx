import { signIn } from "next-auth/react";
import React, { useState } from "react";
import axios from "axios";
// import { useAuth, setAuth } from "../state/index";
import { state, useSnapshot } from "../state/index";

function Login() {
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState("");
  const [password, setPassword] = useState("");
  // const [ui] = setAuth("auth");
  const snap = useSnapshot(state);
  console.log(email);
  console.log(password);
  const submit = (e: any) => {
    // console.log(snap.auth);
    e.preventDefault();
    // console.log(ui);
    const data = {
      password: password,
      email: email,
    };
    axios({
      method: "post",
      url: "https://calm-gray-penguin-hem.cyclic.app/auth",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: data,
    })
      .then(function (response) {
        console.log(response.data);
        if (response.data.auth) {
          console.log(response.data._doc.firstName);
          console.log("Successs");
          //redirect the user to home page
          setFlag("You're logged🙂");
          state.auth = true;
          state.firstName = response.data._doc.firstName;
          state.lastName = response.data._doc.lastName;
          state.email = response.data._doc.email;
          state.empID = response.data._doc.empID;
        } else {
          setFlag("Invalid Email/Password😔");
          console.log("Fail");
          email;
          // :
          // "rajatdh27@gmail.com"
          // empID
          // :
          // "5651"
          // firstName
          // :
          // "Rajat"
          // lastName
          // :
          // "Thakur"
          // password
          // :
          // "123"
          //check email and password combination
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="sign-in flex flex-col p-20 font-roboto">
      <h2 className="text-5xl">I already have an account</h2>
      <p className="text-gray-500 mt-3">Sign In with your email and password</p>
      <form className="flex flex-col" onSubmit={submit}>
        <h2>{flag}</h2>
        <label className="text-2xl mt-10 mb-3 sign-in-label">Email</label>
        <input
          type="email"
          className=" sign-in-input "
          required
          autoComplete="on"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-2xl mt-10 mb-3 sign-in-label">Password</label>
        <input
          type="password"
          className="sign-in-input"
          required
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form-button mt-12 flex gap-10">
          <button className="signIn-button">sign in</button>
          <button className="google-button" onClick={() => signIn()}>
            sign in with google
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
