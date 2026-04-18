import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="page-shell">
      <div className="login-layout">
        <div className="login-card">
          <div className="brand">
            <span className="leaf">🌿</span>
            <span>GreenFin</span>
          </div>

          <div className="login-title">Welcome Back</div>

          <input defaultValue="user@greenfin.com" />
          <input defaultValue="123456" type="password" />

          <button onClick={() => navigate("/dashboard")}>
            Login
          </button>

          <div className="login-subtext">
            Don&apos;t have an account? Sign up
          </div>
        </div>
      </div>
    </div>
  );
}