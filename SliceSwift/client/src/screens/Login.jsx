'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 uppercase">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login Now
              </h1>

              <form className="flex max-w-md flex-col gap-4 uppercase">
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email1"
                      value="Your email"
                    />
                  </div>
                  <TextInput
                    id="email1"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="password1"
                      value="Your password"
                    />
                  </div>
                  <TextInput
                    id="password1"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 text-sky-500 hover:text-sky-600 font-bold">
                  <a href='/forgot'>
                    Forgot Password?
                  </a>
                  
                </div>
                <Button onClick={loginHandler}>
                  Submit
                </Button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 uppercase">
                    You Don't have an account? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up here</a>
                  </p>
              </form>
            </div>
          </div>
          </div>
      </section>

    </>
  );
};

export default Login;
