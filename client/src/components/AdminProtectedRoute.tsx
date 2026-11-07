import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "../context/authContext";
import Loading from "./Loading";

function AdminProtectedRoute() {
  const { user, loading } = UseAuth();

  if (loading) return <Loading />;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default AdminProtectedRoute;