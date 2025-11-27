import { useState, useContext } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { UserContext } from "./UserContext"; 
import UserMenu from "./UserMenu";

import lurnyLogo from "./assets/lurnylogo.png";
import "./App.css";

const products = [
  { name: "English" },
  { name: "Portuguese" },
  { name: "Italian" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const { user } = useContext(UserContext); 

  return (
    <header className="bg-amber-50 header">
      <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">

        {/* LOGO */}
        <div className="flex flex-1">
          <Link to="/" className="flex items-center gap-2">
            <img src={lurnyLogo} className="h-auto w-30 lurny" alt="Lurny" />
          </Link>
        </div>

        {/* MOBILE BURGER */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex lg:gap-x-12">

          {/* LANGUAGES DROPDOWN */}
          <div className="relative">
            <button
              className="flex items-center gap-x-1 text-lg font-semibold"
              onClick={() => setProductOpen(!productOpen)}
            >
              Languages
              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            </button>

            {productOpen && (
              <div className="absolute left-0 top-full mt-3 w-64 rounded-xl bg-white shadow-lg ring-1 ring-gray-900/10 z-40">
                <div className="p-4">
                  {products.map((item) => (
                    <Link
                      key={item.name}
                      to={`/language/${item.name.toLowerCase()}`}
                      className="flex items-start gap-x-3 rounded-lg p-3 hover:bg-gray-50"
                    >
                      <p className="font-semibold">{item.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/schools" className="text-lg font-semibold">
            🏫Schools
          </Link>

          <Link to="/plans" className="text-lg font-semibold">
            💎Plans
          </Link>

          <Link to="/about" className="text-lg font-semibold">
            🦦About us
          </Link>
        </div>

        {/* LOGIN / USER MENU DESKTOP */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!user ? (
            <Link
              to="/login"
              className="text-lg font-semibold rounded-2xl bg-cyan-400 shadow-lg 
                         hover:shadow-cyan-300 hover:bg-cyan-200 hover:text-black 
                         px-4 py-2 text-white"
            >
              Log in
            </Link>
          ) : (
            <UserMenu /> 
          )}
        </div>
      </nav>

      {/* MOBILE MENU */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />

        <Dialog.Panel className="fixed inset-y-0 right-0 bg-white w-full p-6 max-w-sm z-50 shadow-xl">

          {/* TOP ROW */}
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={lurnyLogo} className="h-10 w-auto" alt="Lurny" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* MENU MOBILE */}
          <div className="mt-6 space-y-6">

            {/* LANGUAGES */}
            <div>
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="flex items-center justify-between w-full text-lg font-semibold"
              >
                Languages
                <ChevronDownIcon className="h-6 w-6 text-gray-500" />
              </button>

              {mobileLangOpen && (
                <div className="mt-3 ml-3 space-y-2">
                  {products.map((item) => (
                    <Link
                      key={item.name}
                      to={`/language/${item.name.toLowerCase()}`}
                      className="block text-base py-2 text-gray-700 font-medium hover:text-black"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/schools" className="block text-lg font-semibold">
              🏫Schools
            </Link>

            <Link to="/plans" className="block text-lg font-semibold">
              💎Plans
            </Link>

            <Link to="/about" className="block text-lg font-semibold">
              🦦About us
            </Link>

            <hr className="border-gray-300" />

            {!user ? (
              <Link to="/login" className="block text-lg font-semibold text-cyan-600">
                Log in
              </Link>
            ) : (
              <div className="flex items-center gap-2 mt-4">
                <img
                  src={user.avatar || "/avatars/default.png"}
                  className="w-12 h-12 rounded-full border shadow"
                />
                <div>
                  <p className="font-semibold">{user.username}</p>
                  <Link
                    to="/profile"
                    className="text-cyan-600 font-medium text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Vedi profilo →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
