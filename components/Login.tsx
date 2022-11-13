import React, { useState } from "react";

// import { UserAuth } from "../context/AuthContext";

function Login() {
  //   const { googleSignIn } = UserAuth();

  //   const handleSignIn = async () => {
  //     try {
  //       await googleSignIn();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const submitHandler = async (e) => {
  //     e.preventDefault();

  //     try {
  //       await auth.signInWithEmailAndPassword(email, password);

  //       setEmail("");
  //       setPassword("");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  console.log(email);
  console.log(password);
  const submit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="sign-in flex flex-col p-20 font-roboto">
      <h2 className="text-5xl">I already have an account</h2>
      <p className="text-gray-500 mt-3">Sign In with your email and password</p>
      <form className="flex flex-col" onSubmit={submit}>
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
          <button className="google-button">sign in with google</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
