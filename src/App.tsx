import { useState } from "react";
import { askAI } from "./mockApi";  // ✅ Mock API

function App() {
  const [q, setQ] = useState("");
  const [ans, setAns] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask() {
    setLoading(true);
    const response = await askAI(q);  // ✅ Call mock API
    setAns(response);
    setLoading(false);
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>AI Study Assistant 🤖</h1>
      <textarea
        value={q}
        onChange={(e) => setQ(e.target.value)}
        rows={6}
        cols={60}
        placeholder="Type your question here..."
      />
      <br />
      <button onClick={ask} disabled={loading} style={{ marginTop: 10 }}>
        {loading ? "Thinking..." : "Ask"}
      </button>
      <pre style={{ marginTop: 20, background: "#f4f4f4", padding: 10 }}>
        {ans}
      </pre>
    </div>
  );
}

export default App;
