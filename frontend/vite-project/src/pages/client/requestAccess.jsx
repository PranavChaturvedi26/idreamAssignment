import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";

export default function RequestAccess() {
  const [projects, setProjects] = useState([]);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    apiFetch("/projects/all")
      .then((res) => setProjects(res.projects || []))
      .catch((e) => setErr(e.message));
  }, []);

  const request = async (projectId) => {
    setMsg("");
    setErr("");
    try {
      await apiFetch(`/projects/${projectId}/request-access`, {
        method: "POST",
      });
      setMsg("Access request sent.");
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Request Project Access</h2>
      {msg && <p style={{ color: "green" }}>{msg}</p>}
      {err && <p style={{ color: "red" }}>{err}</p>}

      {projects.map((p) => (
        <div key={p._id} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
          <span>{p.projectName}</span>
          <button onClick={() => request(p._id)}>Request</button>
        </div>
      ))}
    </div>
  );
}
