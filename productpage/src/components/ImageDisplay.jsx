import React from "react";
import PropTypes from "prop-types";

const ImageDisplay = ({ data, slide }) => {
  return (
    <div className={`flex gap-5 size-20 `}>
      {data.map((item, index) => {
        return (
          <img
            src={item.image}
            alt={item.title}
            key={item.id}
            onClick={() => slide(index)}
            className={`rounded-md cursor-pointer transition-transform duration-300 hover:scale-125`}
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
