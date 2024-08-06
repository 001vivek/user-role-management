// src/components/Login.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { fetchUserData } from "../api/api";

const Login = () => {
  const [enteredValues, setEnteredValues] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (identifier: string, value: string) => {
    setEnteredValues((preVal) => ({
      ...preVal,
      [identifier]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const data = await fetchUserData();
      dispatch(setUser(data));
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-5 border w-96 ">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Login</h2>

          <div className="">
            <div className="mb-4">
              <label htmlFor="userName" className="block mb-2 font-bold">
                User name
              </label>
              <input
                onChange={(event) =>
                  handleInputChange("userName", event.target.value)
                }
                value={enteredValues.userName}
                className="border w-full p-2 "
                id="userName"
                type="text"
                name="userName"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-bold">
                Email
              </label>
              <input
                onChange={(event) =>
                  handleInputChange("email", event.target.value)
                }
                value={enteredValues.email}
                className="border w-full p-2 "
                id="email"
                type="email"
                name="email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="password">
                Password
              </label>
              <input
                value={enteredValues.password}
                onChange={(event) =>
                  handleInputChange("password", event.target.value)
                }
                className="border w-full p-2"
                id="password"
                type="password"
                name="password"
                required
              />
            </div>
          </div>

          <p className="flex gap-12 items-center justify-center mt-8">
            <button
              type="button"
              className="w-full text-white bg-green-500 rounded-xl p-2"
            >
              Reset
            </button>
            <button
              type="submit"
              className="w-full text-white bg-green-500 rounded-xl p-2"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
