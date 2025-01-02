import React, { useState } from "react";
import { FaCircle } from "react-icons/fa6";

const ColourPicker = () => {
  const [colour, setColour] = useState("Black");

  const colors = ["Black", "Pink", "Gray", "White"];

  return (
    <div>
      <div className={`text-4xl flex gap-5`}>
        {colors.map((color) => (
          <FaCircle
            key={color}
            className={`border hover:border-4 ${
              colour === color ? "border-4" : ""
            } ease-in-out border-black rounded-full duration-300`}
            style={{
              color: color.toLowerCase(),
              borderColor: colour === color ? "black" : "gray",
            }}
            onClick={() => setColour(color)}
          />
        ))}
      </div>
      <div className={`mt-2.5 text-md font-bold`}>
        <p>{colour}</p>
      </div>
    </div>
  );
};

export default ColourPicker;
