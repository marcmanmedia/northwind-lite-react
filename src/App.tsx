import { useState, useEffect } from "react";
import type { Employee } from "./types/employee";
import { fetchEmployees } from "./api/employeeApi";
import Login from "./components/login";
import "./App.css"

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div>
      {!token ? (
        <Login onLogin={setToken} />
      ) : (
        <>
          <h1 className="app-header">React App: Employee Sales Data</h1>
          {error && <p>{error}</p>}
          <table className="employee-table">
            <thead><tr><th>Employee ID</th><th>Employee Name</th><th>Totla Sales($)</th></tr></thead>
            <tbody>{employees.map(emp => <tr key={emp.employee_id}><td>{emp.employee_id}</td><td>{emp.employee_name}</td><td>{emp.total_sales}</td></tr>)}</tbody>
          </table>
        </>
      )}
    </div>
  );
}
export default App;