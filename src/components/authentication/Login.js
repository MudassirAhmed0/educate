import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import Button from "@mui/material/Button";

const Login = () => {
  const [registerEmail, set_registerEmail] = useState("");
  const [registerPassword, set_registerPassword] = useState("");
  const [loginEmail, set_loginEmail] = useState("");
  const [loginPassword, set_loginPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log("user", user);
    } catch (error) {
      console.log("error.message", error.message);
    }
    // console.log("registerEmail", registerEmail);
    // console.log("registerPassword", registerPassword);
    // console.log("loginEmail", loginEmail);
    // console.log("loginPassword", loginPassword);
  };
  const login = async () => {};
  const logout = async () => {};
  return (
    <>
      <div className="min-h-[100vh] flex justify-center items-center gap-x-[10px]">
        <div className="w-[300px] p-[20px] border-[1px] border-gray-300 rounded-[10px]">
          <h1 className="text-4xl text-center mb-[20px]">Register</h1>
          <input
            placeholder="Email"
            onChange={(event) => set_registerEmail(event.target.value)}
          />
          <input
            placeholder="Password"
            onChange={(event) => set_registerPassword(event.target.value)}
          />
          <button onClick={() => register()}>Create User</button>
        </div>
        <div className="w-[300px] p-[20px] border-[1px] border-gray-300 rounded-[10px]">
          <h1 className="text-4xl text-center mb-[20px]">Login</h1>
          <input
            placeholder="Email"
            onChange={(event) => set_loginEmail(event.target.value)}
          />
          <input
            placeholder="Password"
            onChange={(event) => set_loginPassword(event.target.value)}
          />
          <button>Login</button>
        </div>
      </div>

      <div className="text-center pb-[50px]">
        <h4>User Logged In:</h4>

        <button>Sign Out</button>
      </div>
    </>
  );
};

export default Login;
