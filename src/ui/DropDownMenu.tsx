import React from "react";
import { useMatch } from "react-router";
import { NavLink } from "react-router-dom";

interface DropDownMenuProps {
  scroll: boolean;
}

const DropDownMenu = ({ scroll }: DropDownMenuProps) => {
  const match = useMatch("/");

  return (
    <div className="relative">
      <div className="flex overflow-hidden gap-1">
        <button
          className={`text-md hidden lg:block transition-all duration-300 group drop-down-button ${
            match
              ? scroll
                ? "text-[#c6b393] hover:text-[#b8a179]"
                : "text-[#E1D7C6] hover:text-[#c6b393]"
              : "text-[#c6b393] hover:text-[#b8a179]"
          }`}
        >
          PAST SEASONS
        </button>
      </div>

      <div
        className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg group[.drop-down-button]-hover:opacity-1 opacity-0"
        role="menu"
      >
        <div className="p-2">
          <NavLink
            to="/past-seasons"
            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            Season 2023
          </NavLink>

          {/* <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            View Warehouse Info
          </a>

          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            Duplicate Product
          </a>

          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            Unpublish Product
          </a>

          <form method="POST" action="#">
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete Product
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
