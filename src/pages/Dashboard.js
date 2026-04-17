import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <div className="app-shell">
        <div className="topbar">
          <div className="topbar-left">
            <div className="brand" style={{ color: "white", fontSize: "18px", margin: 0 }}>
              <span className="leaf">🌿</span>
              <span style={{ fontSize: "18px" }}>GreenFin</span>
            </div>
            <div className="nav-links">
  <span onClick={() => navigate("/dashboard")}>Dashboard</span>
  <span>Profile</span>
  <span onClick={() => navigate("/")}>Logout</span>
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
              <button onClick={() => navigate("/add")}>
  Add Transaction
</button>
              <button onClick={() => navigate("/add")}>Add Transaction</button>
              <div className="white-card" style={{ marginTop: "16px" }}>
  <div className="section-title">Sustainability Score</div>

  <div className="score-ring">
    <div className="score-inner">78%</div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}