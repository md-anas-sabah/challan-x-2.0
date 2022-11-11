import React from "react";
import Link from "next/link";

function SignIn() {
  return (
    <div className="sign-in flex flex-col text-center font-roboto">
      <h1 className="text-5xl">New to Challan-X?</h1>
      <Link href="/enroll">
          <button className="mt-14 border w-40 h-12 btn ml-44 hover:bg-white hover:text-black">Create new account</button>
      </Link>
    </div>
  );
}

export default SignIn;
