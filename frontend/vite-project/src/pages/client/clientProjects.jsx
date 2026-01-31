import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";

export default function ClientProjects() {
  const [projects, setProjects] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    apiFetch("/projects/my")
      .then((res) => setProjects(res.projects || []))
      .catch((e) => setErr(e.message));
  }, []);

  if (err) return <p style={{ color: "red" }}>{err}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>My Projects (Granted)</h2>

      {projects.length === 0 ? (
        <p>No granted projects yet.</p>
      ) : (
        projects.map((p) => (
          <div
            key={p._id}
            style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}
          >
            <h4>{p.projectName}</h4>
            <p>{p.emailAddress}</p>
            <p>{p.contactNumber}</p>
            <p>
              {new Date(p.timeline.startDate).toDateString()} →{" "}
              {new Date(p.timeline.endDate).toDateString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
