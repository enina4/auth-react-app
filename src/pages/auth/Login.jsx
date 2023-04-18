import React, { useState } from "react";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-white p-8 rounded-lg w-96">
      <div className="mb-10">
        <h1 className=" font-bold text-3xl uppercase text-center">
          Iniciar Sesión
        </h1>
      </div>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <RiMailLine className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            className="border border-gray-200 w-full outline-none py-2 px-7 rounded-lg"
            placeholder="Email"
          />
        </div>
        <div className="relative">
          <RiLockLine className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="border border-gray-200 w-full outline-none py-2 px-7 rounded-lg"
            placeholder="Password"
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handlerShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handlerShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        <div>
          <button className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
