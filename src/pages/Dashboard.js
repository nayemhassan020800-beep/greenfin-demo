import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData) {
      setData(storedData);

      // 🔥 NEW SIMPLE LOGIC
      const result =
        storedData.income + storedData.savings - storedData.debt;

      setScore(result);
    }
  }, []);

  const approved = score >= 100;

  return (
    <div className="dashboard-page">
      <div className="app-shell">
        
        {/* Topbar */}
        <div className="topbar">
          <div className="topbar-left">
            <div className="brand" style={{ color: "white" }}>
              🌿 GreenFin
            </div>

            <div className="nav-links">
              <span>Dashboard</span>
              <span>Profile</span>
              <span>Demo</span>
            </div>
          </div>

          <button className="logout-btn" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>

        {/* Panel */}
        <div className="dashboard-panel">
          <div className="welcome-title">Welcome Back</div>

          {/* Stats */}
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

          {/* Main Grid */}
          <div className="main-grid">

            {/* Chart */}
            <div className="white-card">
              <div className="section-title">Expenses Overview</div>

              <div className="chart-box">
                <div className="bar-wrap">
                  <div className="bar" style={{ height: "70px" }}></div>
                  Fuel
                </div>
                <div className="bar-wrap">
                  <div className="bar" style={{ height: "120px" }}></div>
                  Office
                </div>
                <div className="bar-wrap">
                  <div className="bar" style={{ height: "90px" }}></div>
                  Supply
                </div>
                <div className="bar-wrap">
                  <div className="bar" style={{ height: "150px" }}></div>
                  Electricity
                </div>
                <div className="bar-wrap">
                  <div className="bar" style={{ height: "80px" }}></div>
                  Travel
                </div>
              </div>
            </div>

            {/* AI CARD */}
            <div className="white-card ai-card">
              <div className="section-title">AI Recommendation</div>

              <div className="ai-highlight">
                Reduce fuel expenses by 20% to save $500 per month
              </div>

              <ul className="ai-list">
                <li>Switch to renewable energy sources</li>
                <li>Use electric vehicles for logistics</li>
                <li>Reduce electricity waste</li>
              </ul>

              {/* 🔥 CREDIT SYSTEM */}
              {data && (
                <div className="credit-box">
                  <h3>Credit Score: {score}</h3>

                  <h3 className={approved ? "credit-approved" : "credit-rejected"}>
                    {approved ? "✅ Loan Approved" : "❌ Loan Rejected"}
                  </h3>

                  <p>
                    {approved
                      ? "Your financial strength meets the required threshold."
                      : "Your score is below the required threshold."}
                  </p>
                </div>
              )}

              <button onClick={() => navigate("/add")}>
                Add Transaction
              </button>

              {/* Sustainability Score */}
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