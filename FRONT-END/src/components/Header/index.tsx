import { StyledMain } from "./styles";

export const Header = () => {
  return (
    <StyledMain>
      <img src={require("../../assets/Logo.png")} alt="Logo NWL" />
      <div>
        <h1>
          Seu
          <span className="Gradient"> duo </span>
          está aqui.
        </h1>
      </div>
    </StyledMain>
  );
};
