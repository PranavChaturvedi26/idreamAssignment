import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";

import ClientProjects from "./pages/client/clientProjects.jsx";
import RequestAccess from "./pages/client/RequestAccess";

import AdminProjects from "./pages/admin/adminProjects.jsx";
import PendingRequests from "./pages/admin/pendingRequests.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      {/* Client */}
      <Route path="/client/projects" element={<ClientProjects />} />
      <Route path="/client/request-access" element={<RequestAccess />} />

      {/* Admin */}
      <Route path="/admin/projects" element={<AdminProjects />} />
      <Route path="/admin/requests" element={<PendingRequests />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
