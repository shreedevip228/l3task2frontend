import { useEffect, useState } from "react";
import API from "../services/api";
import Spinner from "../components/Spinner";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/auth/me")
      .then((res) => setUser(res.data))
      .catch(() => {
        window.location.href = "/login";
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {loading ? (
        <Spinner />
      ) : user ? (
        <p>Welcome, {user.name}! Your email is {user.email}</p>
      ) : (
        <p>Unable to load user data.</p>
      )}
    </div>
  );
}
