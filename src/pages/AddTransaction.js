import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTransaction() {
  const navigate = useNavigate();

  const [income, setIncome] = useState("");
  const [savings, setSavings] = useState("");
  const [debt, setDebt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true); // AI processing feel

    setTimeout(() => {
      const userData = {
        income: Number(income),
        savings: Number(savings),
        debt: Number(debt),
      };

      localStorage.setItem("userData", JSON.stringify(userData));

      navigate("/dashboard");
    }, 1000); // 1 second delay for effect
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f5f7fa"
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        width: "300px"
      }}>
        <h2>Add Financial Data</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <input
            type="number"
            placeholder="Savings"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <input
            type="number"
            placeholder="Debt"
            value={debt}
            onChange={(e) => setDebt(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "green",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            {loading ? "Analyzing..." : "Generate Credit Score"}
          </button>
        </form>
      </div>
    </div>
  );
}