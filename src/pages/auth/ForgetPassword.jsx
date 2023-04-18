import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

import { toast } from "react-toastify";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([email].includes("")) {
      toast.error("El email es obligatorio", {
        theme: "dark" 
      });
      return;
    }
//verificar que email exista
    console.log("toda la funcionalidad de recuperar password");
    toast.success("Se ha enviado las instrucciones", {
      theme: "dark",
      position: "top-center",
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className=" font-bold text-3xl uppercase text-center">
          Recuperar Password
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

        <div>
          <button className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:scale-105 transition-all font-bold">
            Enviar instrucciones
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between">
        <div>
          ¿Ya tienes una cuenta?
          <Link
            to="/"
            className="text-sky-600 font-medium hover:underline transition-all"
          >
            Ingresa
          </Link>
        </div>
        <div className="text-right">
          ¿No tienes una cuenta?
          <Link
            to="/register"
            className="text-sky-600 font-medium hover:underline transition-all"
          >
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
