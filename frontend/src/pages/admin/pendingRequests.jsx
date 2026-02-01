import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";

export default function PendingRequests() {
  const [requests, setRequests] = useState([]);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const load = () => {
    apiFetch("/admin/access-requests/pending")
      .then((res) => setRequests(res.requests || []))
      .catch((e) => setErr(e.message));
  };

  useEffect(() => {
    load();
  }, []);

  const review = async (id, action) => {
    setMsg("");
    setErr("");
    try {
      await apiFetch(`/admin/access-requests/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ action }),
      });
      setMsg(`Request ${action.toLowerCase()}d`);
      load();
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Pending Access Requests</h2>
      {msg && <p style={{ color: "green" }}>{msg}</p>}
      {err && <p style={{ color: "red" }}>{err}</p>}

      {requests.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        requests.map((r) => (
          <div
            key={r._id}
            style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}
          >
            <p>
              <b>User:</b> {r.requestedBy?.username}
            </p>
            <p>
              <b>Project:</b> {r.projectId?.projectName}
            </p>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => review(r._id, "APPROVE")}>Approve</button>
              <button onClick={() => review(r._id, "DENY")}>Deny</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
