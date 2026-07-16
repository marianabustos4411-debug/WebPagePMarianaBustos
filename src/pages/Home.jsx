import React from 'react';
import './Home.css';

export default function Home({ onScrollDown }) {
  return (
    <section className="home-section" id="home-section-hero">
      <div className="home-content">
        
        {/* Retro Chrome Star */}
        <div className="home-star-container" id="home-star-flare" onClick={onScrollDown}>
          <svg
            className="home-star-svg"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="starGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#f5f7fa" />
                <stop offset="70%" stopColor="#d2d7df" />
                <stop offset="100%" stopColor="#8a95a5" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Main star body */}
            <path
              d="M50 5 C50 42 42 50 5 50 C42 50 50 58 50 95 C50 58 58 50 95 50 C58 50 50 42 50 5"
              fill="url(#starGradient)"
              filter="url(#glow)"
            />
            {/* Center diamond core */}
            <path
              d="M50 35 C50 47 47 50 35 50 C47 50 50 53 50 65 C50 53 53 50 65 50 C53 50 50 47 50 35"
              fill="#ffffff"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Brand/Hero Titles */}
        <div className="home-title-wrapper">
          <h1 className="home-title-name">
            <span className="home-title-initial">A</span>
            <span className="home-title-secondary">ndy</span>
          </h1>
          <h1 className="home-title-surname">
            <span className="home-title-initial">B</span>
            <span className="home-title-secondary">ustos</span>
          </h1>
        </div>

      </div>

      {/* Interactive Scroll Indicator */}
      <div className="scroll-indicator" id="home-scroll-indicator" onClick={onScrollDown}>
        <div className="scroll-circle"></div>
        <span className="scroll-text">Desliza</span>
        <div className="scroll-line"></div>
        <div className="scroll-circle"></div>
      </div>
    </section>
  );
}
