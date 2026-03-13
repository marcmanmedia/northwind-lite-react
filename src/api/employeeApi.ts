import type { Employee } from "../types/employee";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchEmployees(token?: string): Promise<Employee[]> {
  const headers: Record<string, string> = {};
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(`${BASE_URL}/sales`, { headers });

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  const result = await response.json();
  return result.data;
}