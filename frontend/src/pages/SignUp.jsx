import { Link } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../components/AuthLayout";

export default function SignUp() {
  const [showPwd, setShowPwd] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: call API
  };

  return (
    <AuthLayout
      showBack
      title="Sign Up"
      subtitle="Enter the below details to sign up"
    >
      <form className="form" onSubmit={onSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <input className="input" placeholder="Enter Your name" />
        </div>

        <div className="field">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            placeholder="Enter Your Email Address"
          />
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="input-wrap">
            <input
              className="input"
              type={showPwd ? "text" : "password"}
              placeholder="Enter your Password"
            />
            <button
              type="button"
              className="icon-btn"
              onClick={() => setShowPwd((v) => !v)}
              aria-label={showPwd ? "Hide password" : "Show password"}
            >
              {showPwd ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="field">
          <label className="label">User Type</label>
          <select className="input select">
            <option value="">Select your User Type</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
            <option value="partner">Partner</option>
          </select>
        </div>

        <button className="primary-btn" type="submit">
          SIGN UP
        </button>

        <p className="helper-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
