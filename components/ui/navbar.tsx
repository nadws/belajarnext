"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky z-10 top-0">
        <div className="group relative  flex   justify-between  pt-4 pr-8 pl-8">
          <a href="#" className="flex float-start mr-8">
            <svg
              width="50"
              height="40"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Vercel
            </span>
          </a>

          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu </span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className="hidden group-hover:block w-full md:block md:w-auto grow"
            id="navbar-dropdown"
          >
            <ul className="flex flex-row font-medium  rounded-lg   rtl:space-x-reverse   border-0  ">
              <li>
                <Link href="/dashboard" className="nav">
                  Products
                </Link>
              </li>
              <li>
                <a href="#" className="nav">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="nav">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="nav">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="nav">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div
            className="hidden group-hover:block w-full md:block "
            id="navbar-dropdown"
          >
            <ul className="flex flex-row font-medium  rounded-lg   rtl:space-x-reverse   border-0  float-end ">
              <li>
                <Link href="/dashboard" className="nav mr-2">
                  Contact
                </Link>
              </li>
              <li>
                <Button
                  className={
                    "hover:bg-slate-500 hover:bg-opacity-25 border bg-black border-opacity-20 border-white"
                  }
                >
                  Log In
                </Button>
              </li>
              <li>
                <Button
                  className={"bg-white hover:bg-slate-300 text-black ml-2"}
                >
                  Sign Up
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
