import styled from "styled-components";

export const OrderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  justify-content: space-between;
  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    h2 {
      font-size: 18px;
      margin: 0;
    }
  }

  svg {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;