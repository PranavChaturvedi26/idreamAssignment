import { useNavigate } from "react-router-dom";

export default function AuthLayout({
  showBack = false,
  brand = "ubiquitous.co",
  title,
  subtitle,
  children,
}) {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      {showBack && (
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          ←
        </button>
      )}

      <div className="auth-card">
        <div className="brand">
          <div className="logo" aria-hidden="true" />
          <div className="brand-text">{brand}</div>
        </div>

        <h1 className="auth-title">{title}</h1>
        {subtitle && <p className="auth-subtitle">{subtitle}</p>}

        {children}
      </div>
    </div>
  );
}
