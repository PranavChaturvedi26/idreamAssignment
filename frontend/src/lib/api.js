const API_BASE = "http://localhost:.3000/api";

export async function apiFetch(path, options = {}) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  let data = null;
  try {
    data = await res.json();
  } catch (e) {
    console.log("No JSON response received " + e);
  }

  if (!res.ok) {
    const message = data?.message || "Something went wrong";
    throw new Error(message);
  }

  return data;
}
