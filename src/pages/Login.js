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

          <button onClick={() => navigate("/dashboard")}>Login</button>

          <div className="login-subtext">
            Don&apos;t have an account? Sign up
          </div>
        </div>

        <div className="preview-panel">
          <div className="topbar">
            <div className="topbar-left">
              <div className="brand" style={{ color: "white", fontSize: "18px", margin: 0 }}>
                <span className="leaf">🌿</span>
                <span style={{ fontSize: "18px" }}>GreenFin</span>
              </div>
              <div className="nav-links">
                <span>Dashboard</span>
                <span>Profile</span>
                <span>Logout</span>
              </div>
            </div>
            <button className="logout-btn">Logout</button>
          </div>

          <div className="dashboard-panel">
            <div className="welcome-title">Welcome Back</div>

            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-label">Total Balance</div>
                <div className="stat-value">$12,500</div>
              </div>

              <div className="stat-card">
                <div className="stat-label">ESG Score</div>
                <div className="stat-value">78/100</div>
              </div>

              <div className="stat-card">
                <div className="stat-label">CO₂ Impact</div>
                <div className="stat-value">↓12%</div>
              </div>
            </div>

            <div className="main-grid">
              <div className="white-card">
                <div className="section-title">Expenses Overview</div>
                <div className="chart-box">
                  <div className="bar-wrap"><div className="bar" style={{ height: "70px" }}></div>Fuel</div>
                  <div className="bar-wrap"><div className="bar" style={{ height: "120px" }}></div>Office</div>
                  <div className="bar-wrap"><div className="bar" style={{ height: "90px" }}></div>Supply</div>
                  <div className="bar-wrap"><div className="bar" style={{ height: "150px" }}></div>Electricity</div>
                  <div className="bar-wrap"><div className="bar" style={{ height: "80px" }}></div>Travel</div>
                </div>
              </div>

              <div className="white-card ai-card">
                <div className="section-title">AI Recommendation</div>
                <div className="ai-highlight">
                  Reduce fuel expenses by 20% to save $500 per month
                </div>
                <ul className="ai-list">
                  <li>Switch to renewable energy sources</li>
                  <li>Use electric vehicles for logistics</li>
                  <li>Reduce electricity waste in operations</li>
                </ul>
                <button onClick={() => navigate("/dashboard")}>
                  Apply Recommendation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}