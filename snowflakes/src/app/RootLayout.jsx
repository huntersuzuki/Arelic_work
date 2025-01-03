"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import SnowfallEffect from "@/components/animations/SnowfallEffect";
import { CiStar } from "react-icons/ci";
export default function RootLayout({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        <SnowfallEffect />

        {isVisible && (
          <header className="animated-header bg-repeat text-4xl">
            <CiStar />
          </header>
        )}

        {children}

        {isVisible && (
          <footer className="animated-footer">
            <p>&copy; 2025 Next.js Animations</p>
          </footer>
        )}
      </body>
    </html>
  );
}
