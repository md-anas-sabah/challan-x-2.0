import React from "react";

function Form() {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col ml-10 text-white" onSubmit={submit}>
      <label className="text-2xl mt-6 sign-in-label">Employee ID</label>
      <input
        type="text"
        className="mt-3 w-72 h-9 text-black p-2 rounded-lg outline-none text-sm"
      />{" "}
      <label className="text-2xl mt-6 sign-in-label">Location</label>
      <input
        type="text"
        className="mt-3 w-72 h-9 text-black p-2 rounded-lg outline-none text-sm"
      />
      <label className="text-2xl mt-6 sign-in-label">Vehicle Number</label>
      <input
        type="text"
        className="mt-3 w-72 h-9 text-black p-2 rounded-lg outline-none text-sm"
      />
      <label className="text-2xl mt-6 sign-in-label">Upload Images</label>
      <input
        className="mt-4"
        type="file"
        id="img"
        name="img1"
        accept="image/*"
      />
      <input type="file" id="img" name="img2" accept="image/*" />
      <input type="file" id="img" name="img" accept="image/*" />
      <label className="text-2xl mt-6 sign-in-label">Description</label>
      <textarea
        name=""
        id=""
        cols="10"
        rows="5"
        style={{ resize: "none" }}
        className="text-black mt-4 p-2 rounded-lg outline-none text-md"
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
