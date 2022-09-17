import styled from "styled-components";

export const StyledSection = styled.section`
  width: 90%;
  display: flex;
  gap: 20px;
  justify-content: center;
  /* overflow-x: scroll; */
  img {
    width: 180px;
  }
  a {
    text-decoration: none;
    max-height: 240px;
  }
  div {
    width: 100%;
    height: 93px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    display: flex;
    padding-left: 14px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    bottom: 96px;
    gap: 5px;
    color: white;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 52.08%
    );
    font-family: "Inter";
  }
  strong {
    font-weight: 900;
    font-size: 15px;
    color: #fff;
  }
  span {
    font-family: "Inter";
    font-weight: 400;
    color: #d4d4d8;
  }
`;
