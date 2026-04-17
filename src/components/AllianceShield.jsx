export default function AllianceShield() {
  return (
    <div style={styles.card}>
      <div style={styles.top}>
        <img src="/con.jpeg" style={styles.topLogo} />
      </div>

      <div style={styles.middle}>
        <img src="/hp.jpeg" style={styles.side} />
        <img src="/HS.jpeg" style={styles.center} />
        <img src="/qc.jpeg" style={styles.side} />
      </div>

      <div style={styles.banner}>
        <h3>ELITE ROOFING ALLIANCE</h3>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "320px",
    margin: "auto",
    border: "4px solid #C0C0C0",
    borderRadius: "18px",
    overflow: "hidden",
  },
  top: { background: "#0A1F44", padding: "10px", textAlign: "center" },
  topLogo: { width: "180px" },
  middle: {
    display: "flex",
    justifyContent: "space-between",
    background: "white",
    padding: "10px",
  },
  side: { width: "80px" },
  center: { width: "110px" },
  banner: { background: "#B30000", color: "white", padding: "10px" },
};

