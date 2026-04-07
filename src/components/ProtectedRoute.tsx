
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  token: string | null;
  children: JSX.Element;
}

export default function ProtectedRoute({ token, children }: ProtectedRouteProps) {
  if (!token) {
    alert("Session expired. Please log in again."); 
    return <Navigate to="/login" replace />; 
  }
  return children;
}