import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    apiFetch("/admin/projects")
      .then((res) => setProjects(res.projects || []))
      .catch((e) => setErr(e.message));
  }, []);

  if (err) return <p style={{ color: "red" }}>{err}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>All Projects (Admin)</h2>
      {projects.map((p) => (
        <div
          key={p._id}
          style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}
        >
          <h4>{p.projectName}</h4>
          <p>{p.emailAddress}</p>
        </div>
      ))}
    </div>
  );
}
