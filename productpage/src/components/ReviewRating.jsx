import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";

const ReviewRating = () => {
  const [rate, setRate] = useState(0);

  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label key={index}>
            <Radio
              type="radio"
              name="rating"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
              }}
            />
            <Rating>
              <FaStar
                color={givenRating <= rate ? "000" : "rgb(192,192,192)"}
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};

export default ReviewRating;
