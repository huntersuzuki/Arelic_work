import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start; // Ensure alignment starts from the left
  align-items: center;
  min-height: 5vh;
  font-size: 20px;
  gap: 8px; // Add spacing between stars
`;

export const Radio = styled.input`
  display: none;
`;

export const Rating = styled.div`
  position: relative;
  width: 24px; // Ensure consistent size
  height: 24px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2); // Slightly enlarge on hover
    transition: transform 0.2s ease-in-out;
  }
`;

export const FullStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: black;
  z-index: 2;
  width: ${({ fillPercentage }) => fillPercentage || "100%"};
  overflow: hidden; // Crop based on the fill percentage
`;

export const EmptyStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: rgb(192, 192, 192);
  z-index: 1;
`;
