import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
// import Header from "../components/Header";
// import { useSession } from "next-auth/react";
import Form from "../components/Form";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState("");

  return (
    <div className=" flex-col flex-1 text-white h-screen p-10 center">
      <Head>
        <title>Challan-X</title>
      </Head>
      <div id="modal"></div>
      <main className="flex-col">
        <div className=" flex-col text-center mt-10">
          <h1 className="font-bebas text-7xl">Welcome To Challan-X</h1>
          <p className="text-red-700"> **Sign In Before Issue Complain** </p>
        </div>
        <div className="button">
          <button onClick={() => setShowModal(true)} className="btn">
            Click here to report!
          </button>
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Form />
        </Modal>
      </main>
    </div>
  );
};

export default Home;

// useEffect(() => {
//   axios
//     .get("http://localhost:5000/find", {
//       maxContentLength: Infinity,
//       maxBodyLength: Infinity,
//     })
//     .then((res) => {
//       const dt = btoa(
//         String.fromCharCode(...new Uint8Array(res.data.data.data))
//       );
//       console.log(res.data.data.data);
//       setData(`data:image/png;base64, ${dt}`);
//       console.log(`data:image/jpeg;base64, ${dt}`);
//       // const base64String = btoa(
//       //   String.fromCharCode(...new Uint8Array(res.data))
//       // );
//     })

//     .catch((err) => console.log(err, "it has an error"));
// });
