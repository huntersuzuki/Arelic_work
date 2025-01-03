"use client";
import React, { useState } from "react";

const QuantityPicker = () => {
  const [colour, setColour] = useState("1L");

  const colors = ["1L", "5L"];

  return (
    <div>
      <div className="flex gap-5">
        {colors.map((color) => (
          <label key={color} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="color"
              value={color}
              checked={colour === color}
              onChange={() => setColour(color)}
              className="hidden"
            />
            <span
              className={`w-6 h-6 rounded-full border-2 ${
                colour === color ? "border-black bg-black" : "border-gray-400"
              }`}
              style={{
                backgroundColor: color.toLowerCase(),
              }}
            ></span>
          </label>
        ))}
      </div>
      <div className="mt-2.5 text-md font-bold">
        <p>{colour}</p>
      </div>
    </div>
  );
};

export default QuantityPicker;
