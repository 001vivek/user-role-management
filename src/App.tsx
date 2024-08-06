// src/App.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Admin from "./components/Admin";
import User from "./components/User";
import Login from "./components/Login";

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <main className="flex items-center justify-center container h-screen">
      <div>
        {!user.username ? (
          <Login />
        ) : (
          <div className="border rounded p-4">
            <h1>Welcome, {user.username}</h1>
            {user.role === "admin" ? <Admin /> : <User />}
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
