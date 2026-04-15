import React, { useState } from "react";
import { X, BookOpen } from "lucide-react";

export default function RightPanel({ isOpen, onClose }) {
  const tabs = ["Story", "Guidelines", "Design Assets"];
  const [activeTab, setActiveTab] = useState("Story");

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: "65px", // Below navbar approx
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "all 0.3s ease",
          zIndex: 40,
        }}
      />

      {/* Side Panel */}
      <div
        className="right-side-panel"
        style={{
          right: isOpen ? "0" : "-400px",
          transition: "right 0.3s ease",
        }}
      >
        {/* Header */}
        <div
          className="flex-row justify-between"
          style={{
            padding: "24px",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <div
            className="flex-row"
            style={{
              gap: "12px",
              color: "var(--primary-color)",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            <BookOpen size={20} />
            Brand Resources
          </div>
          <X
            size={20}
            color="var(--text-muted)"
            cursor="pointer"
            onClick={onClose}
          />
        </div>

        {/* Tabs */}
        <div style={{ padding: "24px 24px 0 24px" }}>
          <div
            className="flex-row"
            style={{
              background: "var(--bg-color)",
              padding: "4px",
              borderRadius: "var(--radius-xl)",
            }}
          >
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "8px 0",
                  fontSize: "13px",
                  fontWeight: activeTab === tab ? 600 : 500,
                  color:
                    activeTab === tab
                      ? "var(--primary-color)"
                      : "var(--text-muted)",
                  background: activeTab === tab ? "#fff" : "transparent",
                  borderRadius: "var(--radius-xl)",
                  cursor: "pointer",
                  boxShadow: activeTab === tab ? "var(--shadow-sm)" : "none",
                  transition: "all 0.2s",
                }}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "24px", flex: 1, overflowY: "auto" }}>
          {activeTab === "Story" && (
            <div className="flex-col" style={{ gap: "16px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600 }}>Brand Story</h3>

              {/* Dummy Shield Logo */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: "#1c2e4a",
                  borderRadius: "6px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                IFK
              </div>

              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-main)",
                  lineHeight: "1.6",
                }}
              >
                HIFK is a legendary sports club founded in 1897, representing
                tradition, community and the pursuit of excellence. Rooted in
                the heart of Helsinki, HIFK has united generations with its
                passion for sports, creating unforgettable experiences both on
                and off the field. With its iconic red and white colors
                symbolizing courage, pride, and determination, HIFK is more than
                just a sports club—it's a way of life. From its rich history to
                its vibrant fan culture, HIFK embodies the spirit of teamwork
                and the love for the game, making it a powerhouse of Finnish
                sports.
              </p>
            </div>
          )}

          {activeTab !== "Story" && (
            <div
              style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              Content for {activeTab} will appear here.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
