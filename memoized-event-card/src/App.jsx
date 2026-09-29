import { useState, useCallback } from "react";
import EventCard from "./components/EventCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [events, setEvents] = useState([
    { id: 1, title: "Tech Fest", location: "Mumbai" },
    { id: 2, title: "Music Night", location: "Delhi" },
    { id: 3, title: "Sports Meet", location: "Bangalore" },
  ]);

  // useCallback: same function reference on every render.
  // Without this, React.memo would think the prop changed → re-render anyway.
  const handleDelete = useCallback((id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const addRandomEvent = () => {
    const titles = ["Art Expo", "Food Carnival", "Book Fair", "Hackathon"];
    const cities = ["Pune", "Chennai", "Kolkata", "Hyderabad"];
    setEvents((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: titles[Math.floor(Math.random() * titles.length)],
        location: cities[Math.floor(Math.random() * cities.length)],
      },
    ]);
  };

  console.log(
    "%c🟦 App (parent) RENDERED",
    "color: #3b82f6; font-weight: bold; font-size: 13px;"
  );

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "700px",
        margin: "0 auto",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#1e293b", marginBottom: "8px" }}>
        🧠 Memoized Event Card Demo
      </h1>
      <p style={{ color: "#64748b", marginBottom: "24px" }}>
        Open DevTools (F12) → Console. Click "Increment Counter" many times.
        The App re-renders every time, but the EventCards <strong>do not</strong>.
      </p>

      {/* Counter + Add Event controls */}
      <div
        style={{
          background: "#ffffff",
          padding: "16px 20px",
          borderRadius: "12px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ margin: 0, color: "#1e293b" }}>Counter: {count}</h2>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            padding: "10px 18px",
            background: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          ➕ Increment Counter
        </button>

        <button
          onClick={addRandomEvent}
          style={{
            padding: "10px 18px",
            background: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          ➕ Add Random Event
        </button>
      </div>

      {/* Events list */}
      <h2 style={{ color: "#1e293b" }}>Events ({events.length})</h2>
      {events.length === 0 ? (
        <p style={{ color: "#94a3b8", fontStyle: "italic" }}>
          No events. Add one above!
        </p>
      ) : (
        events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

export default App;