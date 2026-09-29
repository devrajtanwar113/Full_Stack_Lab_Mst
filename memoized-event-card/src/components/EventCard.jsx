import React, { useRef } from "react";

const EventCard = React.memo(({ id, title, location, onDelete }) => {
  // useRef keeps this count across renders (doesn't trigger re-render itself)
  const renderCount = useRef(0);
  renderCount.current += 1;

  // Colored log in Chrome DevTools
  console.log(
    `%c🎴 EventCard RENDERED → ${title}`,
    "color: #10b981; font-weight: bold; font-size: 13px;"
  );

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "16px 20px",
        margin: "12px 0",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "transform 0.2s",
      }}
    >
      <div>
        <h3 style={{ margin: 0, fontSize: "1.2rem" }}>🎉 {title}</h3>
        <p style={{ margin: "4px 0 0", opacity: 0.85, fontSize: "0.9rem" }}>
          📍 {location}
        </p>
        <small style={{ opacity: 0.6, fontSize: "0.75rem" }}>
          This card has rendered {renderCount.current} time(s)
        </small>
      </div>

      <button
        onClick={() => onDelete(id)}
        style={{
          background: "rgba(255,255,255,0.2)",
          border: "1px solid rgba(255,255,255,0.4)",
          color: "white",
          padding: "8px 14px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "0.9rem",
          fontWeight: "bold",
        }}
      >
        🗑 Delete
      </button>
    </div>
  );
});

export default EventCard;