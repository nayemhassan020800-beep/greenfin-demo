export default function AddTransaction() {
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
              <span>Dashboard</span>
              <span>Profile</span>
              <span>Logout</span>
            </div>
          </div>
          <button className="logout-btn">Logout</button>
        </div>

        <div className="transaction-layout">
          <div className="side-card">
            <div className="badge">Dashboard</div>
            <h2 style={{ marginTop: 0 }}>Add Transaction</h2>

            <label>Type</label>
            <select>
              <option>Expense</option>
              <option>Income</option>
            </select>

            <label>Category</label>
            <select>
              <option>Fuel</option>
              <option>Electricity</option>
              <option>Office Supplies</option>
            </select>

            <label>Date</label>
            <input type="date" />

            <button>Submit</button>
          </div>

          <div className="form-card">
            <div className="badge">Expense Summary</div>
            <h1 style={{ marginTop: 0 }}>Transaction Insights</h1>

            <div className="row">
              <div className="white-card">
                <div className="muted">Selected Category</div>
                <h2>Fuel</h2>
                <div className="muted">$125.00 estimated monthly cost</div>
              </div>

              <div className="white-card">
                <div className="muted">Carbon Impact</div>
                <h2>Medium</h2>
                <div className="muted">12% higher than green target</div>
              </div>
            </div>

            <div className="white-card" style={{ marginTop: "18px" }}>
              <div className="section-title">Sustainability Score</div>
              <div className="score-ring">
                <div className="score-inner">78%</div>
              </div>

              <ul className="ai-list">
                <li>Switch to renewable energy sources</li>
                <li>Reduce logistics and fuel costs</li>
                <li>Increase green investment allocation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}