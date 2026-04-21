import React from "react";
import { Headphones, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-main-section">
        <div className="nav-logo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
            <path d="M12 12 2.1 7.1"></path>
          </svg>
          CREATLON
        </div>

        <div className="nav-links">
          <span className="nav-link-item nav-link-active">Shop</span>
          <span className="nav-link-item">
            Brand
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>
      </div>
      <div className="nav-right-section">
        {/*search bar*/}
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search your favorite team"
            className="input-field"
          />
        </div>

        {/*Telegram link*/}
        <div className="nav-telegram">
          <Headphones size={20} />
          Join Our Telegram Community
        </div>

        <div className="nav-profile">
          <div className="user-avatar">
            <User size={18} />
          </div>
          <span className="user-name">Tasfia.ayesha</span>
        </div>
      </div>
    </nav>
  );
}
