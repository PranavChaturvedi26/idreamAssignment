import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../lib/api";
import { saveAuth } from "../lib/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      const res = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      saveAuth(res.token, res.user);

      // route based on role
      if (res.user.role === "ADMIN") navigate("/admin/projects");
      else navigate("/client/projects");
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}

      <form onSubmit={onSubmit}>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
