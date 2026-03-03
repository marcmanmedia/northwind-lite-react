import { useEffect, useState } from "react";
import "./App.css";

interface Employee {
  employee_id: number;
  employee_name: string;
  total_sales: number;
}

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch("https://nothwind-lite-fastapi.vercel.app/sales")
      .then((res) => res.json())
      .then((data: Employee[]) => setEmployees(data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  return (
    <div className="app">
      <h1 className="app-header">React App: Employee Sales Data</h1>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Total Sales ($)</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.employee_id}>
              <td>{emp.employee_id}</td>
              <td>{emp.employee_name}</td>
              <td>{emp.total_sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

//function App() {
  /*const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
//}

//export default App
