import { useNavigate } from "react-router-dom";
import type { Employee } from "../types/employee";
import "../App.css";

type DashboardProps = {
  employees: Employee[];
  error: string | null;
};

function Dashboard({ employees, error }: DashboardProps) {
  const navigate = useNavigate();
  // Handle logout
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{import.meta.env.VITE_DASHBOARD_HEADER}</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee Id</th><th>Employee Name</th><th>Total Sales ($)</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.employee_id}>
              <td>{emp.employee_id}</td><td>{emp.employee_name}</td><td>{emp.total_sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default Dashboard;