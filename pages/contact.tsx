import React from "react";

function contact() {
  return (
    <form className="text-white p-10 flex-col space-y-6 ml-20">
      <div className="space-y-2">
        {" "}
        <h1 className="text-5xl ">Contact Us</h1>
        <p className="text-gray-300">
          Please submit your inquiry using the form below and we will get in
          touch with you shortly.
        </p>
      </div>
      <div className="form-label space-y-2">
        <label>Your Email</label>
        <input type="text" placeholder="name@example.com" />
      </div>

      <div className="form-label space-y-2">
        <label>Subject</label>
        <input type="text" />
      </div>

      <div className="form-label space-y-2">
        <label>Message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="resize-none border-none outline-none text-black p-3 scrollbar-hide"
        ></textarea>
      </div>

      <button className="border h-14 w-52 text-lg rounded-sm hover:bg-gray-200 hover:text-black">Submit</button>
    </form>
  );
}

export default contact;
