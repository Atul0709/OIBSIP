import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/userAction';

const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#24292F] p-2 uppercase font-bold"> {/* Reduced padding */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <img alt="SliceSwift" className="mr-3 h-6 sm:h-9" src="/images/logo.png" />
         
          <a href="/" className="text-white text-lg font-bold"> {/* Smaller font size */}
            SliceSwift
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2"> {/* Reduced space between items */}
          <a href="/" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="/cart" className="text-white relative hover:text-gray-200">
            <span>Cart</span>
            {cartState.cartItems.length > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartState.cartItems.length}
              </span>
            )}
          </a>
          {/* <a href="/orders" className="text-white hover:text-gray-200">
            Orders
          </a> */}
          {currentUser ? (
            <div className="flex items-center uppercase"> {/* Add this div */}
              <button className="text-white uppercase font-bold">{currentUser.name}</button> {/* Smaller text */}
              <button
                onClick={() => dispatch(logoutUser())}
                className="text-white hover:text-gray-200 ml-1 uppercase" // Add some margin
              >
                Sign out
              </button>
            </div>
          ) : (
            <>
              <a href="/login" className="text-white hover:text-gray-200">
                Sign in
              </a>
              <a href="/register" className="text-white hover:text-gray-200">
                Sign up
              </a>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Off-Canvas Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-blue-500 bg-opacity-80 z-50">
          <div className="flex justify-end h-full">
            <div className="bg-white w-48 py-4 px-4 shadow-lg"> {/* Reduced width and padding */}
              <div className="flex justify-end">
                <button
                  onClick={closeMobileMenu}
                  className="text-black p-2 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="mt-4 space-y-2"> {/* Reduced margin and space between items */}
                <li>
                  <a href="/" className="text-blue-500 text-sm hover:text-blue-700"> {/* Smaller text */}
                    Home
                  </a>
                </li>
                <li>
                  <a href="/cart" className="text-blue-500 text-sm hover:text-blue-700"> {/* Smaller text */}
                    Cart
                    {cartState.cartItems.length > 0 && (
                      <span className="ml-1 text-red-500 text-xs"> {/* Smaller text */}
                        ({cartState.cartItems.length})
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a href="/orders" className="text-blue-500 text-sm hover:text-blue-700"> {/* Smaller text */}
                    Orders
                  </a>
                </li>
                {currentUser ? (
                  <li>
                    <button className="text-blue-500 uppercase font-bold">{currentUser.name}</button> {/* Smaller text */}
                    <button
                      onClick={() => dispatch(logoutUser())}
                      className="text-blue-500 text-sm hover:text-blue-700 ml-1" // Add some margin
                    >
                      Sign out
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <a href="/login" className="text-blue-500 text-sm hover:text-blue-700"> {/* Smaller text */}
                        Sign in
                      </a>
                    </li>
                    <li>
                      <a href="/register" className="text-blue-500 text-sm hover:text-blue-700"> {/* Smaller text */}
                        Sign up
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
