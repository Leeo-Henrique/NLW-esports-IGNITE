import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  h1 {
    color: white;
    font-weight: 900;
    font-size: 3.75rem;
    margin-top: 50px;
  }
  img {
    max-width: 1344px;
    margin: 30px 0px;
  }
  .Gradient {
    background: -webkit-linear-gradient(
      0deg,
      #9572fc 15%,
      #43e7ad 50.52%,
      #e2d45c 90%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  div {
    display: flex;
    margin-bottom: 40px;
  }
`;
