"use client";

import React, { useEffect } from "react";
import { useUser } from "./context/UserContext";
import { useRouter } from "next/navigation";

const WelcomePage: React.FC = () => {
  const { user, setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    setUser(null);
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl text-black font-bold mb-4">
        ¡Bienvenido, {user.fullName}! Disfruta de tu lectura.
      </h1>
      <p className="text-lg text-black mb-6">
        Tu libro favorito es: "{user.favoriteBook}"
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default WelcomePage;
