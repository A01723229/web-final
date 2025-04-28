"use client";

import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const { setUser } = useUser();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/login", { 
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Usuario o contraseña no válidos");
      }

      const data = await response.json();
      setUser({ fullName: data.fullName, favoriteBook: data.favoriteBook });
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl text-black font-bold mb-4">Acceso a NovaLearn</h1>
      <form onSubmit={handleLogin} className="flex flex-col text-black gap-4 w-80">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
