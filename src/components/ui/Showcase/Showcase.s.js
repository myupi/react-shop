import styled from "styled-components";
import bgImage from "../../../assets/bg.png";

export const Presentation = styled.div`
  margin: 50px 0;
  width: 100%;
  height: 500px;
  background: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  background-color: #bcbcbc;
  position: relative;
  padding: 100px 50px;
`;

export const Title = styled.h1`
  width: 325px;
  font-size: 40px;
  font-weight: 600;
  color: #fff;
`;

export const SubText = styled.p`
  font-size: 15px;
  color: #fff;
`;
