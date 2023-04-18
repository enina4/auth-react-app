import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUserLine,
} from "react-icons/ri";

import { toast } from "react-toastify";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, lastName, email, password, confirmPassword].includes("")) {
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

    if (password != confirmPassword) {
      toast.error("Los password no coinciden", {
        theme: "dark",
      });
      return;
    }

    console.log("Toda la funcionalidad de login");
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-[500px]">
      <div className="mb-10">
        <h1 className=" font-bold text-3xl uppercase text-center">
          Registrarse
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <RiUserLine className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="border border-gray-200 w-full outline-none py-2 px-7 rounded-lg"
            placeholder="Nombre(s)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative">
          <RiUserLine className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="border border-gray-200 w-full outline-none py-2 px-7 rounded-lg"
            placeholder="Apellidos"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="relative">
          <RiUserLine className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
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
        <div className="relative">
          <RiLockLine className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="border border-gray-200 w-full outline-none py-2 px-7 rounded-lg"
            placeholder="Confirmar password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <button className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:scale-105 transition-all font-bold">
            Crear cuenta
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between">
        <div>
          Ya tienes una cuenta?
          <Link
            to="/"
            className="text-sky-600 font-medium hover:underline transition-all"
          >
            Ingresa
          </Link>
        </div>
        <div className="text-right">
          <Link
            to="/forget-password"
            className="text-gray-500 font-medium hover:underline transition-all"
          >
            ¿Olvidaste tu password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
