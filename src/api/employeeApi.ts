import type { Employee } from "../types/employee";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchEmployees(): Promise<Employee[]> {
  const response = await fetch(`${BASE_URL}/sales`);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  const result = await response.json();

  return result.data;  
}