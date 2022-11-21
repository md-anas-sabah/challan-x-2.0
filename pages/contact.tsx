import React, { useState } from "react";
import axios from "axios";
import { state, useSnapshot } from "../state/index";

function contact() {
  // const [email, setEmail] = useState("");
  const [subject, setSub] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState("");
  var num1 = 30;
  var num2 = 10;
  const res = useSnapshot(state).auth;
  const email = useSnapshot(state).email;
  console.log(res);
  console.log("id" + email);
  const submit = (e: any) => {
    e.preventDefault();
    const data = { subject, message, email };
    console.log(data);
    if (res) {
      axios({
        method: "post",
        url: "https://shy-cyan-tadpole-boot.cyclic.app/contact",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: data,
      })
        .then(function (response) {
          console.log(response.data);
          if (response) {
            setFlag("Thank You😔");
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
    } else {
      setFlag("Please login!😔");
    }
  };
  return (
    <form
      className="text-white p-10 flex-col space-y-6 ml-20"
      onSubmit={submit}
    >
      <h1>{flag}</h1>
      <div className="space-y-2">
        {" "}
        <h1 className="text-5xl ">Contact Us</h1>
        <p className="text-gray-300">
          Please submit your inquiry using the form below and we will get in
          touch with you shortly.
        </p>
      </div>
      {/* <div className="form-label space-y-2">
        <label>Your Email</label>
        <input
          type="text"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div> */}

      <div className="form-label space-y-2">
        <label>Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSub(e.target.value)}
        />
      </div>

      <div className="form-label space-y-2">
        <label>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name=""
          id=""
          cols={num1}
          rows={num2}
          className="resize-none border-none outline-none text-black p-3 scrollbar-hide"
        ></textarea>
      </div>

      <button className="border h-14 w-52 text-lg rounded-sm hover:bg-gray-200 hover:text-black">
        Submit
      </button>
    </form>
  );
}

export default contact;
