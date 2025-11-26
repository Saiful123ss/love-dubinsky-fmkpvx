import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

// Styling JSS
const useStyles = createUseStyles({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #FFB6C1, #FF69B4)",
    overflow: "hidden",
    position: "relative",
    fontFamily: "'Arial', sans-serif",
  },
  card: {
    background: "white",
    borderRadius: "25px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    animation: "$pulse 2s infinite",
    zIndex: 2,
  },
  title: {
    fontSize: "36px",
    color: "#FF1493",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  message: {
    fontSize: "20px",
    color: "#333",
  },
  heart: {
    position: "absolute",
    fontSize: "24px",
    color: "#FF69B4",
    animation: "$float 4s infinite linear",
    userSelect: "none",
  },

  // Keyframes
  "@keyframes float": {
    "0%": { transform: "translateY(0) translateX(0)", opacity: 0 },
    "50%": { opacity: 1 },
    "100%": { transform: "translateY(-600px) translateX(50px)", opacity: 0 },
  },
  "@keyframes pulse": {
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.05)" },
    "100%": { transform: "scale(1)" },
  },
});

export default function App() {
  const classes = useStyles();
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random();
      const left = Math.random() * 90; // % left
      setHearts((prev) => [...prev, { id, left }]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 4000);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.title}>I ❤️ You</div>
        <div className={classes.message}>You make my world so beautiful!</div>
      </div>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={classes.heart}
          style={{ left: `${heart.left}%` }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
