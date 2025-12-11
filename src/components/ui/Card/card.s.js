import styled from "styled-components";

export const CardWrapper = styled.div`
  border: 1px solid grey;
  padding: 20px;
  transition: 0.1s linear;
  border-radius: 10px;
  &:hover {
    transform: scale(1.01);
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardImage = styled.div`
  flex: 1;
`;
export const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center; /* <-- ЭТО РЕШАЕТ ПРОБЛЕМУ */
  position: relative;
  padding: 0.6em 2em;
  border: 1px solid #222;
  border-radius: 0.25em;
  color: #222;
  font-size: 1.5em;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: border 300ms, color 300ms;
  user-select: none;

  p {
    z-index: 1;
    text-align: center;
  }

  &:hover {
    color: #fff;
  }

  &:active {
    border-color: #333;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 9em;
    aspect-ratio: 1;
    background: #222;
    opacity: 50%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
  }

  &::before {
    left: 0;
    transform: translateX(-8em);
  }

  &::after {
    right: 0;
    transform: translateX(8em);
  }

  &:hover::before {
    transform: translateX(-1em);
  }

  &:hover::after {
    transform: translateX(1em);
  }

  &:active::before,
  &:active::after {
    background: #333;
  }
`;
