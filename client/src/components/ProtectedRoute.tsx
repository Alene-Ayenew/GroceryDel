import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "../context/authContext";
import Loading from "./Loading";

function ProtectedRoute() {
  const { user, loading } = UseAuth();
  if (loading) return <Loading />;
  if(!user) return <Navigate to="/login"  replace/>

  return <Outlet />;
}

export default ProtectedRoute;
