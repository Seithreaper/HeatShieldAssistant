import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Estimator from "./pages/Estimator";
import Alliance from "./pages/Alliance";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter basename="/HeatShieldAssistant">
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/estimator">Estimator</Link>
        <Link style={styles.link} to="/alliance">Alliance</Link>
        <Link style={styles.link} to="/settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estimator" element={<Estimator />} />
        <Route path="/alliance" element={<Alliance />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    background: "#0A1F44",
    justifyContent: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

