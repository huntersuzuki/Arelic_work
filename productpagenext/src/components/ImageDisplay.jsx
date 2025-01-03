import React from "react";
import PropTypes from "prop-types";

const ImageDisplay = ({ data, slide }) => {
  return (
    <div className={`flex gap-10 size-20 `}>
      {data.map((item) => {
        return (
          <img
            src={item.image}
            alt={item.title}
            key={item.id}
            onClick={() => slide(item.id - 1)}
            className={`rounded- md cursor-pointer transition-transform duration-300 hover:scale-125`}
          />
        );
      })}
    </div>
  );
};
ImageDisplay.propTypes = {
  data: PropTypes.array.isRequired,
  slide: PropTypes.func.isRequired,
};

export default ImageDisplay;
