import styled from "styled-components";

export const SectionStyled = styled.section`
  width: 90%;
  color: white;
  background-image: linear-gradient(
    90deg,
    #9572fc 0%,
    #43e7ad 50.52%,
    #e2d45c 100%
  );
  padding-top: 4px;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  border-radius: 8px;
  * {
    font-family: "Inter";
  }
`;

export const DivStyled = styled.div`
  width: 100%;
  background-color: #2a2634;
  height: 80px;
  border-radius: 5px;
  padding: 32px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
  }
  strong {
    font-weight: 800;
    letter-spacing: -0.47px;
    font-size: 24px;
  }
  span {
    font-weight: 400;
    color: #a1a1aa;
  }
  button {
    cursor: pointer;
    padding: 12px;
    border-radius: 4px;
    border: 0;
    background-color: rgb(139, 92, 246);
    color: white;
    display: flex;
    align-items: center;
    gap: 15px;
    transition: ease-in-out 0.2s;
    font-size: 16px;
    line-height: 19px;
    line-height: 100%;
    letter-spacing: -0.18px;
  }
  button:hover {
    background-color: rgb(139, 92, 246, 0.5);
  }
`;
