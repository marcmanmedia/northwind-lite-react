import { Link } from "react-router-dom";

interface HomeProps {
  token: string | null;
}

function Home({ token }: HomeProps) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to the Employee Portal</h1>

      {token ? (
        <>
          <p>You are logged in!</p>
          <Link to="/dashboard">Go to Dashboard</Link>
        </>
      ) : (
        <>
          <p>Please log in to see the dashboard.</p>
          <Link to="/login">Go to Login</Link>
        </>
      )}
    </div>
  );
}

export default Home;