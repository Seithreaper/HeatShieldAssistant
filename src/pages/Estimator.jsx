import { useState } from "react";
import { calculateMaterials } from "../engine/calc";

export default function Estimator() {
  const [system, setSystem] = useState("MR");
  const [sqFeet, setSqFeet] = useState("");
  const [results, setResults] = useState(null);

  const runCalc = () => setResults(calculateMaterials(system, sqFeet));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Estimator</h1>

      <select value={system} onChange={(e) => setSystem(e.target.value)}>
        <option value="MR">MR System</option>
        <option value="Fabric">Fabric Reinforced</option>
        <option value="Flexion">Flexion Single Ply</option>
        <option value="Membrane">Membrane Coating</option>
        <option value="Foam">Foam & Coating</option>
      </select>

      <input
        type="number"
        placeholder="Square Feet"
        value={sqFeet}
        onChange={(e) => setSqFeet(e.target.value)}
      />

      <button onClick={runCalc}>Calculate</button>

      {results && (
        <div style={{ marginTop: "20px" }}>
          {Object.entries(results).map(([k, v]) => (
            <p key={k}>
              <strong>{k}:</strong> {v}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

