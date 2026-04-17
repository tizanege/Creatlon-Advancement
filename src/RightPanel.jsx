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
        className="backdrop"
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
      />

      {/* Side Panel */}
      <div
        className="right-side-panel"
        style={{
          right: isOpen ? "0" : "-400px",
        }}
      >
        {/* Header */}
        <div className="panel-header flex-row justify-between">
          <div className="panel-header-title flex-row">
            <BookOpen size={20} />
            Brand Resources
          </div>
          <X size={20} className="icon-close" onClick={onClose} />
        </div>

        {/* Tabs */}
        <div className="tabs-wrapper">
          <div className="tabs-container flex-row">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-item ${activeTab === tab ? "active" : ""}`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="panel-content">
          {activeTab === "Story" && (
            <>
              <h3 className="brand-story-title">Brand Story</h3>

              {/* Dummy Shield Logo */}
              <div className="dummy-logo">IFK</div>

              <p className="brand-description">
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
            </>
          )}

          {activeTab !== "Story" && (
            <div className="panel-empty-state">
              Content for {activeTab} will appear here.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
