import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./components/login";
import ProtectedRoute from "./components/ProtectedRoute";
import type { Employee } from "./types/employee";
import { fetchEmployees } from "./api/employeeApi";

function App() {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch employees when token is available
  useEffect(() => {
    if (!token) return;

    async function loadEmployees() {
      try {
        const data = await fetchEmployees(token ?? undefined);
        setEmployees(data);
      } catch {
        setError("Unable to load employee data.");
      }
    }

    loadEmployees();
  }, [token]);

  // Handle login
  function handleLogin(newToken: string) {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Home Page */}
        <Route path="/" element={<Home token={token} />} />

        {/* Login Page */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute token={token}>
              <Dashboard employees={employees} error={error} />
            </ProtectedRoute>
          }
        />

        {/* Fallback route (optional) */}
        <Route path="*" element={<Home token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;