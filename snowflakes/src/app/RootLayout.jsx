// src/app/RootLayout.jsx

"use client"; // Client-side component

import { useState, useEffect } from "react";
import "./globals.css";
import SnowfallEffect from "@/components/animations/SnowfallEffect";
import star from "../../public/decorations/star.png";
import { CiStar } from "react-icons/ci";
export default function RootLayout({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Make header/footer disappear after 5 seconds
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Snowfall Effect (Background animation) */}
        <SnowfallEffect />

        {/* Header (Disappears after 5 seconds) */}
        {isVisible && (
          <header className="animated-header bg-repeat text-4xl">
            <CiStar />
          </header>
        )}

        {/* Main Content */}
        {children}

        {/* Footer (Disappears after 5 seconds) */}
        {isVisible && (
          <footer className="animated-footer">
            <p>&copy; 2025 Next.js Animations</p>
          </footer>
        )}
      </body>
    </html>
  );
}
