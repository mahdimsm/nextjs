"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import NavbarRoutes from "./navbar-routes";
import logoNav from "@/public/logo.png";
const NavbarMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="rounded-md hover:bg-gray-200"
        onClick={(e) => {
          e.preventDefault();
          toggleOpen();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {isOpen &&
        createPortal(
          <div
            onClick={(e) => {
              e.preventDefault();
            }}
            className="fixed top-0 flex h-full w-64 flex-col gap-y-4 bg-gray-100 p-5 ring-0"
          >
            <div className="flex items-center justify-between">
              <Image src={logoNav} alt="site-logo" width={40} height={40} />
              <button
                className="rounded-md hover:bg-gray-200"
                onClick={(e) => {
                  e.preventDefault();
                  toggleOpen();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="border-b"></div>
            <div className="flex">
              <NavbarRoutes vertical />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default NavbarMobileMenu;
