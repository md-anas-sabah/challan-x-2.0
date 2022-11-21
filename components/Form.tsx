import axios from "axios";
import React, { useState } from "react";
import { state, useSnapshot } from "../state/index";

function Form() {
  const [file, setEmail] = useState("");
  const [desc, setPassword] = useState("");
  const [vehicleNum, setFirstName] = useState("");
  const [location, setLastName] = useState("");
  // const [employee, setEmployee] = useState("");
  const ap = useSnapshot(state).auth;
  const id = useSnapshot(state).empID;
  const submit = (e: any) => {
    e.preventDefault();
    console.log("login");
    if (ap) {
      const data = { file, desc, vehicleNum, location, id };
      console.log(data);
      axios({
        method: "post",
        url: "https://shy-cyan-tadpole-boot.cyclic.app/add-challan",
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
        data: data,
      })
        .then(function (response) {
          console.log(response);
          if (response) {
            console.log("Successs");
            //redirect the user to home page
          } else {
            console.log("Fail");
            //check email and password combination
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <form className="flex flex-col ml-10 text-white" onSubmit={submit}>
      <h1>
        {useSnapshot(state).auth
          ? "Logged In!🙂"
          : "Not logged in😔\nCan't send data"}
      </h1>
      {/* <label className="text-2xl mt-6 sign-in-label">Employee Id</label>
      <input
        type="text"
        className="mt-3 w-72 h-9 text-black p-2 rounded-lg outline-none text-sm"
        required
        autoComplete="on"
        value={employee}
        onChange={(e) => setEmployee(e.target.value)}
      /> */}
      <label className="text-2xl mt-6 sign-in-label">Location</label>
      <input
        type="text"
        className="mt-3 w-72 h-9 text-black p-2 rounded-lg outline-none text-sm"
        required
        autoComplete="on"
        value={location}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label className="text-2xl mt-6 sign-in-label">Vehicle Number</label>
      <input
        type="text"
        className="mt-3 w-72 h-9 text-black p-2 rounded-lg outline-none text-sm"
        required
        autoComplete="on"
        value={vehicleNum}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label className="text-2xl mt-6 sign-in-label">Upload Images</label>
      <input
        className="mt-4"
        type="file"
        accept="image/*"
        name="fileImg"
        onChange={(e: any) => setEmail(e.target.files[0])}
      />
      {/* <input type="file" id="img" name="img2" accept="image/*" />
      <input type="file" id="img" name="img" accept="image/*" /> */}
      <label className="text-2xl mt-6 sign-in-label">Description</label>
      <textarea
        name=""
        id=""
        cols="10"
        rows="5"
        style={{ resize: "none" }}
        className="text-black mt-4 p-2 rounded-lg outline-none text-md"
        value={desc}
        onChange={(e) => setPassword(e.target.value)}
      ></textarea>
      <div className="mt-8 ml-16 border w-40 text-center h-12 bg-red-600 border-none ">
        <button
          className="mt-2 uppercase w-40
         tracking-wider border-none "
        >
          Report
        </button>
      </div>
    </form>
  );
}

export default Form;
