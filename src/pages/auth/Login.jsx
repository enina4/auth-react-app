import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

import { toast } from "react-toastify";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      toast.error("Todos los campos son obligatorios", {
        theme: "dark",
        position: "top-center",
      });
      return;
    }
    if (password.length < 6) {
      toast.error("El password debe contener al menos 6 caracteres", {
        theme: "dark",
      });
      return;
    }

    console.log("correcto");
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className=" font-bold text-3xl uppercase text-center">
          Iniciar Sesión
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <RiMailLine className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            className="border border-gray-200 w-full outline-none py-2 px-7 rounded-lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative">
          <RiLockLine className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="border border-gray-200 w-full outline-none py-2 px-7 rounded-lg"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <div className="text-right">
          <Link
            to={"forget-password"}
            className="text-gray-500 hover:underline transition-colors"
          >
            ¿Olvidaste tu password?
          </Link>
        </div>
        <div>
          <button className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:scale-105 transition-all font-bold">
            Ingresar
          </button>
        </div>
      </form>
      <div className="text-center">
        ¿No tienes una cuenta?
        <Link
          to="/register"
          className="text-sky-600 font-medium hover:underline transition-all"
        >
          Regístrate
        </Link>
      </div>
    </div>
  );
};

export default Login;
