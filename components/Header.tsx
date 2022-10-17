import React from "react";
import {
  HomeIcon,
  ArrowRightOnRectangleIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  DocumentIcon,
  ChatBubbleLeftRightIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="text-gray-500 p-5 border-r hidden md:inline border-gray-900 overflow-y-scroll h-screen scrollbar-hide w-64 ">
      <div className=" flex-shrink-0">
        <h1 className="text-white text-5xl font-thin font-Roboto ml-5 cursor-pointer">
          Challan-X
        </h1>
        <p className="ml-16">Powered By</p>
        <h2 className="text-white text-2xl font-thin font-Bebas ml-5">
          Chandigarh <span className="text-red-600">University</span>
        </h2>
      </div>
      {session ? (
        <div
          className="flex text-white items-center justify-center  border rounded-lg h-12  mt-10 cursor-pointer"
          onClick={() => signOut()}
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          <p className="ml-2">{session.user?.name}</p>
        </div>
      ) : (
        <div
          className="flex text-white items-center justify-center  border rounded-lg h-12  mt-10 cursor-pointer"
          onClick={() => signIn()}
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          <p>Sign-In</p>
        </div>
      )}

      <div className="flex-col mt-10 text-lg">
        <Link href="/">
          <div className="text-white flex space-x-3 items-center mb-4 hover:bg-gray-400 hover:text-black cursor-pointer h-10 p-2 rounded-xl">
            <HomeIcon className="h-5 w-5 " />
            <p>Home</p>
          </div>
        </Link>
        <Link href="/enquiry">
          <div className="text-white flex space-x-3 items-center mb-4 hover:bg-gray-400 hover:text-black cursor-pointer h-10 p-2 rounded-xl">
            <QuestionMarkCircleIcon className="h-5 w-5 " />
            <p>Challan Enquiry</p>
          </div>
        </Link>

        <div className="text-white flex space-x-3 items-center mb-4 hover:bg-gray-400 hover:text-black cursor-pointer h-10 p-2 rounded-xl">
          <RocketLaunchIcon className="h-5 w-5 " />
          <p>Services</p>
        </div>
        <div className="text-white flex space-x-3 items-center mb-4 hover:bg-gray-400 hover:text-black cursor-pointer h-10 p-2 rounded-xl">
          <DocumentIcon className="h-5 w-5 " />
          <p>Guidelines</p>
        </div>
        <Link href="/about">
          <div className="text-white flex space-x-3 items-center mb-4 hover:bg-gray-400 hover:text-black cursor-pointer h-10 p-2 rounded-xl">
            <HandThumbUpIcon className="h-5 w-5 " />
            <p>Vision And Mission</p>
          </div>
        </Link>
        <Link href="/">
          <div className="text-white flex space-x-3 items-center mb-4 hover:bg-gray-400 hover:text-black cursor-pointer h-10 p-2 rounded-xl">
            <UserGroupIcon className="h-5 w-5 " />
            <p>About Us</p>
          </div>
        </Link>
        <Link href="/contact">
          <div className="text-white flex space-x-3 items-center mb-4 hover:bg-gray-400 hover:text-black cursor-pointer h-10 p-2 rounded-xl">
            <ChatBubbleLeftRightIcon className="h-5 w-5 " />
            <p>Contact Us</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
