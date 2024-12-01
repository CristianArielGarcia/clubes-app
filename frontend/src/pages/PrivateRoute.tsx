import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSupabase } from "../components/SupabaseContext";

const PrivateRoute = () => {
  const supabase = useSupabase();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null indica que está cargando

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(!!user); // true si el usuario existe, false en caso contrario
      }
    };

    checkUser();
  }, [supabase]);

  // Mientras verificamos la autenticación, puedes mostrar un spinner o nada
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // Si no está autenticado, redirige al login
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Si está autenticado, muestra el contenido protegido
  return <Outlet />;
};

export default PrivateRoute;
