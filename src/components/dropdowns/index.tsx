import { useState } from "react";
import { ChevronDownIcon } from "../icons";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <div
        className="inline-flex items-center overflow-hidden rounded-md bg-white"
      >
        <button
          className="h-full flex items-center bg-transparent !border-0 p-2 hover:bg-gray-50 hover:text-gray-700 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-sm font-medium">John Doe</span>
          <ChevronDownIcon />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
        >
          <div className="p-2">
          <strong className="block p-2 text-xs font-medium uppercase text-gray-400">
            General
          </strong>

          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            View on Storefront
          </a>

        </div>
      </div>
      )}
    </div>
  )
};