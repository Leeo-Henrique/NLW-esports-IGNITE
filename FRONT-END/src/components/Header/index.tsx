import { StyledMain } from "./styles";

export const Header = () => {
  return (
    <StyledMain className="animate__animated animate__bounceInDown">
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
