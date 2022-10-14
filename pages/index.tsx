import type { NextPage } from "next";
import Head from "next/head";
// import Header from "../components/Header";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div className=" flex-col flex-1 text-white h-screen p-10">
      <Head>
        <title>Challan-X</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="flex-col">
        <div className=" flex-col text-center mt-10">
          <h1 className="font-bebas text-7xl">Welcome To Challan-X</h1>
          <p className="text-red-700"> **Sign In Before Issue Complain** </p>
        </div>

        
      </main>
    </div>
  );
};

export default Home;
